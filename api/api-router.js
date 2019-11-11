const router = require('express').Router()

const bcrypt = require('bcryptjs')


router.get('/', (req,res)=> {
    res.json({ api: "It's alive" });
})


module.exports=router
