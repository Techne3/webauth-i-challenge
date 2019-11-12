const router = require('express').Router()
const requiresAuth = require('../auth/requires-auth-middleware')
const Users = require('./users.model')


router.get('/',requiresAuth, (req,res)=> {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => res.send({message: "you shall not pass!"}))
})

module.exports = router