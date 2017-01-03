const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const List = require('../../models/list')
const Photo = require('../../models/photo');
const Post = require('../../models/post');
const Session = require('../../models/session');

const bcrypt = require('bcrypt-nodejs');
const randomString = require('../../Server-Utils/randomString'); //for createing salt

//signup
router.post('/', (req, res, next) => {
  
  return User.create(req.body)
  .then(user => {
  	if(!user) {
      var err = new Error('Unauthorized');
      err.status = 401;
      throw err;
    } 
    return Session.add(user.userId)
  })
  .then( sessionId => {
  	console.log('user session id: ', sessionId)
    res.cookie('sessionId', sessionId)
    res.json(user)
  })
  .catch(next)
  // var userData = {
  //   email: req.body.email
  // }

  // return new Promise( (resolve, reject) => {
  //   bcrypt.genSalt(4, (error, salt) => {   //creating the salt
  //     if(error){
  //     	reject(error)
  //     }
  //     else {
  //     	bcrypt.hash(req.body.password, salt, null, (error, hash) => {//creating the hash with the salt and the pw
  //         if(error) {
  //         	reject(error)
  //         }
  //         else {
  //         	resolve(hash)
  //         }
  //       })
  //     }
  //   })
  // })
  // .then( (hash) => {
  //   userData.password = hash; //assign password to be hash
  //   return User.create(userData) //creating the user w/ req email and hashed pw
  // })
  // .then(user => Session.add(user.id)) 
  // .then(sessionId => {
  //   res.cookie('sessionId', sessionId);
  //   res.json({});
  // })
  // .catch(next);

})

// router.get('/', function(req, res, next){
// 	let user;

// 	return User.findOne({
// 			where: {
// 				email: req.body.email
// 			} 
// 		})
// 		.then( userData => {
// 			if(!userData){
// 				let err = new Error('Unauthorized')
// 				err.status = 401;
// 				throw err
// 			}
// 		})
// })

router.get('/:userId', function(req, res, next){
	User.findOne({
		where: {
			userId: req.params.userId
		}
	})
	.then( user => {
		res.json(user)
	})
	.catch(next)
})

router.get('/:userId/posts', function(req, res, next){
	Post.findAll({
		where: {
			ownerId: req.params.userId
		}
	})
	.then( posts => {
		res.json(posts)
	})
	.catch(next)
})

router.get('/:userId/photos', function(req, res, next){
	Photo.findAll({
		where: {
			ownerId: req.params.userId
		}
	})
	.then( photos => {
		res.json(photos)
	})
	.catch(next)
})

router.get('/:userId/lists', function(req, res, next){
	List.findAll({
		where: {
			ownerId: req.params.userId
		}
	})
	.then( lists => {
		res.json(lists)
	})
	.catch(next)
})


module.exports = router;