const express = require('express')

const apiRouter = require('./api-router')
const configureMiddleware = require('./configureMiddleware.js')
const cors = require('cors')

const server = express();
server.use(cors())


configureMiddleware(server)
server.use('/api', apiRouter)

module.exports = server;