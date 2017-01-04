const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const Session = require('../../models/Session');

router.use((req, res, next) => {
	// console.log(req.session.userId)
	User.findOne({
		where: {
			userId: req.session.userId
		}
	})
	.then( user => {
		// if(!user) {
	 //      var err = new Error('Unauthorized');
	 //      err.status = 403;
	 //      throw err;
  //   	} 

		req.user = user;
		next();
	})
})

module.exports = router;