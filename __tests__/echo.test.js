const request = require('supertest')

const app = require('../src/server')

describe(`API tests for echo endpoints`, () => {
  describe(`get`, () => {
    test(`should return query parameters`, () => {
      return request(app)
        .get('/api/v1/echo?org=omni')
        .set('Accept', 'application/json')
        .send()
        .expect(200)
        .then(res => {
          expect(res.body.query.org).toBe('omni')
        })
    })
    test(`should not return anything in response`, () => {
      return request(app)
        .get('/api/v1/echo')
        .set('Accept', 'application/json')
        .send()
        .expect(200)
        .then(res => {
          expect(res.body.query.org).toBe(undefined)
        })
    })
  })

  describe(`post`, () => {
    test(`should return request's body in response`, () => {
      return request(app)
        .post('/api/v1/echo')
        .set('Accept', 'application/json')
        .send({ org: 'omni' })
        .expect(200)
        .then(res => {
          expect(res.body.body.org).toBe('omni')
        })
    })
    test(`should not return anything in response`, () => {
      return request(app)
        .post('/api/v1/echo')
        .set('Accept', 'application/json')
        .send()
        .expect(200)
        .then(res => {
          expect(res.body.body.org).toBe(undefined)
        })
    })
  })
})
