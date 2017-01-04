'use strict'

//import/require models
const db = require('./db')
const User = require('./user');
const List = require('./list');
const Photo = require('./photo');
const Post = require('./post');
const Session = require('./session');

//set associations

//many to many
Photo.belongsToMany(List, {through: 'listId'})

//one to many
User.hasMany(List)
User.hasMany(Post)
User.hasMany(Photo)
List.hasMany(Photo, {foreignKey: 'listPhotos'})

//one to one
Post.belongsTo(User, {as: 'userPost'})

Session.hasOne(User);
User.belongsTo(Session);


//export models
module.exports = {
	db,
	User,
	List,
	Photo,
	Post,
	Session
}