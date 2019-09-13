const request = require('supertest')

const app = require('../src/server')

describe(`API tests for health check endpoint`, () => {
  describe(`get`, () => {
    test(`should return query parameters`, () => {
      return request(app)
        .get('/?org=omni')
        .set('Accept', 'application/json')
        .send()
        .expect(200)
        .then(res => {
          expect(res.body.org).toBe('omni')
        })
    })
  })
})
