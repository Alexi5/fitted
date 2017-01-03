'use strict'

//import sql db and Sequelize
const Sequelize = require('sequelize');
const db = require('./db')
const List = require('./list');
const Photo = require('./photo');

//schema
const post = {
	postId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	ownerId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	}
}

const config = {
	instanceMethod: {
	}
}

//define and export model
const Post = db.define('post', post, config);

module.exports = Post;