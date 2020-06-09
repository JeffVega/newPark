const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const reload = require('reload');
const http = require('http');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const mainRoute = require('./routes/mainRoutes');
const parkRoute = require('./routes/parkRoute');
const userRoute = require('./routes/user')

const app = express()
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
console.log(process.env.MONGO_DB)
mongoose.connect(process.env.MONGO_DB, () => {
    console.log(`connect to datebase ${process.env.MONGO_DB}`)
}, {useNewUrlParser: true});

app.use(morgan('dev'));
console.log(__dirname)
if (process.env.DEV === true) {
    app.use((req, res, next) => {
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
        next()

    })
}

app.use(express.static(path.join(__dirname, '/views')));
app.engine('hbs', exphbs({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');

app.use('/', mainRoute);
app.use('/',parkRoute);
app.use('/',userRoute);
const server = http.createServer(app)

server.listen(PORT = 3000, () => {
    console.log(`APP LISTENING ON ${PORT}`)
})
reload(app);
