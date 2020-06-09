const express = require('express')
const router = express.Router();
router.get('/', function (req, res) {
    res.render('home',{
        title:"hello"
    });
   console.log(req.body)
});
router.get('/about-us',(req,res)=>{
    res.render('about',{
        title:"About Page",
        isDisplayName:false
    })
})

module.exports = router;