const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const models = require('../../models/index')


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
    req.session.userId = user.userId
    res.json(user)
  })
  .catch(next)
})

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
		}, 
		include: [
			{model: models.Post, as: 'userPosts'}
		]
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
		}, 
		include: [
			{model: models.Photo, as: 'userPhotos'}
		]
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
		}, 
		include: [
			{model: models.Post, as: 'userLists'}
		]
	})
	.then( lists => {
		res.json(lists)
	})
	.catch(next)
})


module.exports = router;