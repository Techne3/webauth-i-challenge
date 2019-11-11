const router = require('express').Router()

const authRouter= require('../auth/auth-router')
const usersRouter=require('../users/users-router.js')

const bcrypt = require('bcryptjs')

router.use('/auth', authRouter)
router.use('/users', usersRouter)

router.get('/', (req,res)=> {
    res.json({ api: "It's  running, better catch it!" });
})

// router.post('/hash', (req,res)=> {
//     //read password from the body
//     let password = req.body.password
//     const hash =bcrypt.hashSync(password, 14)
//     //hash the password
//     res.status(200).json({password, hash})
// })
module.exports=router
