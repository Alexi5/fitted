'use strict'

//import/require models
const db = require('./db')
const User = require('./user');
const List = require('./list');
const Photo = require('./photo');
const Post = require('./post');
const Session = require('./session');

//set associations
// User.hasMany(Post, {foreignKey: 'userId'})
User.hasMany(Post)
Post.belongsTo(User, {as: 'userPost'})

List.hasMany(Photo, {foreignKey: 'listPhotos'})
Photo.belongsTo(List, {foreignKey: 'listId'})

User.hasMany(List)
User.hasMany(Photo)

Session.hasOne(User)
User.belongsTo(Session)

// Post.belongsToMany(User, {through: adminId})
// Photo.belongsToMany(User, {through: adminId})
// List.belongsToMany(User, {through: adminId})


// List.belongsTo(Post)
// Photo.belongsTo(Post)
// Post.hasOne(List)
// Post.hasOne(Photo)


//export models
module.exports = {
	db,
	User,
	List,
	Photo,
	Post,
	Session
}