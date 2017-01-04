const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const List = require('../../models/list')
const Photo = require('../../models/photo');
const Post = require('../../models/post');
const auth = require('../middleware/authenticate')

router.use(auth);

//get all lists
router.get('/', function(req, res, next){
	List.findAll({
		where: {
			ownerId: req.session.userId
		}
	})
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

//get single list
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

//create new list
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

router.put('/:listId', function(req, res, next){

	let newImg = req.body.imgUrl;
	let listID = req.body.listId;

	List.findOne({
		where: {
			listId: listID
		}
	})
	.then(list => {
		if(!list){
			res.sendStatus(404).end()
		}

		let photosArray = list.dataValues.listPhotos;
		photosArray.push(newImg);

		console.log(photosArray)
		let updatedList = {
			listId: list.dataValues.listId,
			listPhotos: photosArray
		}

		list.update(updatedList)
		.then( returnList => {
			console.log('returnList: ', returnList)
			res.json(returnList)
		})
	})
})

module.exports = router;