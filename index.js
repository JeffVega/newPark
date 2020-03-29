const express = require('express');
const mustacheExpress = require('mustache-express');
const morgan = require('morgan');

const app = express()
app.use(morgan('dev'));
app.engine('html',mustacheExpress());
app.set('view engine','html')
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.render('index', {
            head: {
                  title: 'page title'

            },
            content: {
                  title: 'post title',

                  description: 'description'
            } 
        });
    });
app.listen(process.env.PORT || 3000, ()=>{
    console.log('running express')
});