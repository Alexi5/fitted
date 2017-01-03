const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const List = require('../../models/list')
const Photo = require('../../models/photo');
const Post = require('../../models/post');

router.get('/', function(req, res, next){
	Photo.findAll(
	{
		where: {
			ownerId: req.cookies.userId
		}
	}
	)
	.then( photos => {
		res.json(photos)
	})
	.catch(next)
})

router.get('/:photoId', function(req, res, next){
	Photo.findOne({
		where: {
			photoId: req.params.photoId
		}
	})
	.then( photo => {
		res.json(photo)
	})
	.catch(next)
})

router.get('/:userId', function(req, res, next){
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

router.post('/', function(req, res, next){
	return Photo.create({
		imgUrl: req.body.imgUrl,
		ownerId: 1
	})
	.then(newPhoto => {
		console.log(newPhoto)
		// User.findOne({
		// 	where: {
		// 		userId: photo.dataValues.ownerId
		// 	}
		// })
		// .then(user => {
		// 	let newPhoto = {
		// 		userName: user.dataValues.name,
		// 		photoId: photo.dataValues.photoId,
		// 		ownerId: photo.dataValues.ownerId,
		// 		imgUrl: photo.dataValues.imgUrl,
		// 		tag: photo.dataValues.tag, 
		// 		createdAt: photo.dataValues.createdAt 
		// 	}
		// 	res.json(newPhoto)
		// })
		res.json(newPhoto)
	})
	.catch(next)
})

module.exports = router;