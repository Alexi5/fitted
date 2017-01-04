'use strict'

//import/require models
const db = require('./db')
const User = require('./user');
const List = require('./list');
const Photo = require('./photo');
const Post = require('./post');
const Session = require('./session');

//associations

//many to many
Photo.belongsToMany(List, {through: 'listId'})

//one to many
List.belongsToMany(Photo, {through: 'listId'})

//one to one -> broken
// Post.belongsTo(User, {as: 'userPost'})
// User.belongsTo(Session);
// Session.hasOne(User);


//export models
module.exports = {
	db,
	User,
	List,
	Photo,
	Post,
	Session
}