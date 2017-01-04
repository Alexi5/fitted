const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const List = require('../../models/list')
const Photo = require('../../models/photo');
const Post = require('../../models/post');
const auth = require('../middleware/authenticate')

router.use(auth);

router.get('/', function(req, res, next){
	Post.findAll({
		where: {
			ownerId: req.session.userId
		}
	})
	.then( posts => {
		res.json(posts)
	})
	.catch(next)
})

router.get('/:postId', function(req, res, next){
	Post.findOne({
		where: {
			postId: req.params.postId
		}
	})
	.then( post => {
		res.json(post)
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


router.post('/', function(req, res, next){
	
	return Post.create({
		title: req.body.title,
		content: req.body.content,
		ownerId: 1				//change this later
	})
	.then( newPost => {
		// User.findAll({
		// 	where: {
		// 		userId: posts.dataValues.ownerId
		// 	}
		// })
		// .then(user => {
		// 	let newPost = {
		// 		userName: user.dataValues.name,
		// 		title: post.dataValues.title,
		// 		content: post.dataValues.content,
		// 		ownerId: post.dataValues.ownerId, 
		// 		createdAt: post.dataValues.createdAt, 
		// 	}
		// 	res.json(newPost)
		// })
		res.json(newPost)
	})
	.catch(next)
})

router.delete('/:postId', function(req, res, next){
	return Post.findOne({
		where: {
			postId: req.params.postId
		}
	})
	.then( post => {
		console.log(post)
		if(!post){
			res.status(404).end()
		}
		post.destroy({
			where: {
				postId: post.dataValues.postId
			}
		})
		res.send('post deleted')
	})
})

module.exports = router;