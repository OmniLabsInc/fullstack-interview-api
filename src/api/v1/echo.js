const express = require('express')

const router = express.Router()

/**
 * returns the query object back as the response
 * @param {object} req request object containing query parameters
 * @param {object} res response object from the API
 */
async function getEcho(req, res) {
  try {
    res.status(200).json({ query: req.query })
  } catch (error) {
    res.status(500).json({
      name: error.name,
      message: error.message,
    })
  }
}

/**
 * returns the request body back as the response
 * @param {object} req request object containing request body
 * @param {object} res response object from the API
 */
async function postEcho(req, res) {
  try {
    res.status(200).json({ body: req.body })
  } catch (error) {
    res.status(500).json({
      name: error.name,
      message: error.message,
    })
  }
}

// routes
router.get('/', getEcho)
router.post('/', postEcho)

// export router
module.exports = router
