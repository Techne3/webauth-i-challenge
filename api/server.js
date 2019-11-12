const express = require('express')

const apiRouter = require('./api-router')
const configureMiddleware = require('./configureMiddleware.js')
const session = require('express-session')
// add these for the sessions database

const KnexSessionsStorage = require('connect-session-knex')(session)
const KnexConnection =require('../database/dbConfig')

const server = express();

// 2 configure the sessions and cookies
const sessionConfiguration = {
    name: 'cookieMonster',  // default name is sid
    secret: process.env.COOKIE_SECRET || 'is it secret? is it safe?',
    cookie: {
      maxAge: 1000 * 60 * 60, // valid for 1 hour (in milliseconds)
      secure: process.env.NODE_ENV === 'development' ? false : true ,  // do we send cookie over http only ?
      httpOnly: true, // prevent client javascript code from accessing the cookie
    
    },
    resave: false, // save sessions even when they have not changed
    saveUninitialized: true,  // read about it on the docs to respect GDPR
    store: new KnexSessionsStorage ({
      knex: KnexConnection,
      clearInterval: 1000 * 60 * 10, //delete expired sessions every 10 minutes 
      tablename: 'user_sessions',
      sidfieldname: 'id',
      createTable: true,
    })
  }

  server.use(session(sessionConfiguration)) // 3 use the sessions middleware globally


configureMiddleware(server)

server.use('/api', apiRouter)

server.get('/', (req,res)=> {
    res.json({ api: "It's  running, better catch it!", session: req.session });
})


module.exports = server;