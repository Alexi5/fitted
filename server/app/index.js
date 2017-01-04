//import express, bp, vollyball
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const volleyball = require('volleyball');
const path = require('path');
const authenticate = require('./middleware/authenticate')

//apply express to app
const app = express();

// serve static files - for photos
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

//requrie the db and routes
const db = require('../models/db');
const dbIndex= require('../models/index');

//middleware ==================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(volleyball);
app.use(cookieParser());

app.use(session({
	secret: 'this is the secret',
	//cookie: {}
}))

app.use(authenticate)

//serves up routes
//need home page
app.use('/api', require('./routes/routeIndex.js'));

app.use('/*', (req, res) => {
	const renderPath = path.join(__dirname, '..', '..', 'browser/index.html')
	res.sendFile(renderPath);
}); 

//for error handlign
app.use(function(err, req, res, next){
	res.status(err.status || 500).send(err.message)
})

//sync the DB
db.sync()
.then( () => {
	app.listen(3000)
})
.catch( err => {
	console.log('Error', err)
})
