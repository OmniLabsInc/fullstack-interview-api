const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const api = require('./api')

const app = express()

// default body size
const BODY_LIMIT = '10mb'

// add basic middlewares
app.use(helmet())
app.use(cors())
app.use(express.json({ limit: BODY_LIMIT }))
app.use(express.urlencoded({ extended: true, limit: BODY_LIMIT }))
app.set('trust proxy', true)

// for health checks
app.get('/', (req, res) => {
  res.status(200).send(req.query)
})

// api router
app.use('/api', api)

module.exports = app // for testing
