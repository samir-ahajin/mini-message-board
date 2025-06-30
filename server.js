require('dotenv').config();
const express = require('express');
const app = express();  
const path = require('node:path');


// const messages = require('./models/messages');

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname,"public");
app.use(express.static(assetsPath))



app.set("views",path.join(__dirname,"views"));
app.set('view engine','ejs');

const homeRoute = require('./routes/homeRoute')
const newRoute = require('./routes/newRoute')
const detailRoute = require('./routes/detailRoute')

app.use('/',homeRoute)


app.use('/new',newRoute)


app.use('/details',detailRoute)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});



