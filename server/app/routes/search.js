const express = require('express');
const router = express.Router();
const List = require('../../models/list')
const Photo = require('../../models/photo');

router.get('/', function(req, res, next){
	List.findByTag(req.body.tags)
	.then( lists => {
		console.log('req.body: ', req.body)
		console.log('lists: ', lists)
		res.json(lists)
	})
	.catch(next)
})

module.exports = router;