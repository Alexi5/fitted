const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const List = require('../../models/list')
const Photo = require('../../models/photo');
const Post = require('../../models/post');

router.get('/', function(req, res, next){
	let allLists = List.findAll()
	.then( lists => {
		return lists
	})
	
	let allPosts = Post.findAll()
	.then( posts => {
		return posts
	})

	let allPhotos = Photo.findAll()
	.then( photos => {
		return photos
	})

	return Promise.all([allLists, allPosts, allPhotos])
	.then( results => {
		results.map( item => {
			return item
		})
		res.send(results)
	})
	.catch(next)
})

module.exports = router