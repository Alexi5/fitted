const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/', function(req, res, next){
	let user;

	return User.findOne({
			where: {
				email: req.body.email
			} 
		})
		.then( userData => {
			if(!userData){
				let err = new Error('Unauthorized')
				err.status = 401;
				throw err
			}


		})
})