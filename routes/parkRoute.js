const express = require('express');
const router = express.Router();
const Park = require('../models/Park')
const mongoose = require('mongoose');

router.post('/img',(req,res)=>{
   const {name,description} = req.body;

    const newPark = {name,description};
    console.log(newPark)
    Park.create(newPark)
.then(results =>{
    console.log(results,'results')
    res.send(res.json(results))
    
})
.catch(e =>{
    console.error(`this is our Error ${e}`)
})
})

module.exports = router;