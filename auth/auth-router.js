const router = require('express').Router();
const bcrypt = require('bcryptjs')

const Users = require('../users/users.model');

router.post('/register', (req, res) => {
  let credentials = req.body;

  const hash = bcrypt.hashSync(credentials.password, 14)
  credentials.password=hash

  Users.add(credentials)
    .then(saved => {
        req.session.username = saved.username
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});



router.post('/login', (req,res)=> {
    let {username, password} =req.body

    Users.findBy({username})
    .first()
    .then(user => {
        // check that the password is valid
    if(user && bcrypt.compareSync(password, user.password)){
        req.session.username = user.username // add properties to existing session object

        res.status(200).json({message: `Welcome ${user.username}!`})
    }else{
        res.status(401).json({message: 'Invalid Credentials'})
    }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports =router