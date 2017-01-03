const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const List = require('../../models/list')
const Photo = require('../../models/photo');
const Post = require('../../models/post');

router.get('/', function(req, res, next){

	List.findAll(
	{
		where: {
			ownerId: req.cookies.userId
		}
	}
	)
	.then( lists => {
		res.json(lists)
	})
	.catch(next)
})

// router.get('/:tags', function(req, res, next){
// 	List.findAll({
// 		where: {
// 			ownerId: req.cookies.userId
// 		}
// 	})
// 	.then( lists => {
// 		res.json(lists)
// 	})
// 	.catch(next)
// })


router.get('/:listId', function(req, res, next){
	List.findOne({
		where: {
			listId: req.params.listId
		}
	})
	.then( foundList => {
		var newListPhotos = foundList.dataValues.listPhotos;
		var finalList = [];

		newListPhotos.map( photoInList => {
			Photo.findOne({
				where: {
					photoId: photoInList
				}
			})
			.then( photo => {
				photoInList = photo.dataValues.imgUrl
				// console.log('#photo afterUpdate:', photoInList) //being updated to url
				finalList.push(photoInList);
				
				foundList.update({
					listPhotos: finalList
				})

			})

		})	
		res.json(foundList)
	})
	.catch(next)
})

// router.get('/:listId/photos', function(req, res, next){
// 	List.findOne({
// 		where: {
// 			listId: req.params.listId
// 		}
// 	})
// 	.then( list => {
// 		Photo.findAll({ 
// 			where: { 
// 				'listIds': list.dataValues.listId 
// 			},
// 			include: [ List ] 
// 		})
// 	})
// 	.catch(next)
// })


router.get('/:userId', function(req, res, next){
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


router.post('/', function(req, res, next){
	List.create({
		name: req.body.name,
		ownerId: 1				//change this later
	})
	.then(newList => {
		// User.findOne({
		// 	where: {
		// 		userId: list.dataValues.ownerId
		// 	}
		// })
		// .then(user => {
		// 	let newList = {
		// 		userName: user.dataValues.name,
		// 		ownerId: list.dataValues.ownerId,
		// 		listId: list.dataValues.listId,
		// 		tags: list.dataValues.tags, 
		// 		createdAt: list.dataValues.createdAt 
		// 	}
		// 	res.json(newList)
		// })
		res.json(newList)
	})
	.catch(next)
})

module.exports = router;