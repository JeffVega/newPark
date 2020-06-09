const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const router = express.Router();
const saltRounds = 10;

router.get('/register',(req,res)=>{
  const {username,password} = req.body;
  
})

router.post('/register',async (req,res)=>{
    console.log(req.body)
    try{
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(req.body.password,salt)
        const user = {username:req.body.username,password:hashedPass}
        console.log(salt)
        console.log(hashedPass)
        console.log(user)
        User.create(user)
        .then(results =>{
            res.send(res.json(results))
        })
    }
    catch{
        res.status(400)
    }
})
module.exports = router;