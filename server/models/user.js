'use strict'

const Sequelize = require('sequelize');
const db = require('./db')
const bcrypt = require('bcrypt-nodejs');
const Post = require('./post')
const List = require('./list')
const Photo = require('./photo')

//schema
const user = {
	userId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
	}, 
	email: {
		type: Sequelize.STRING,
	},
	password: {
		type: Sequelize.STRING,
	}
}

const config = {
	instanceMethods: {
		checkPassword: function(pass){
	      return new Promise( (resolve, reject) => {
	          bcrypt.compare(pass, this.password, (error, resBool) => {
	              if(error) { return reject(error) }
	              resolve(resBool)    
	          })
	      })
		},
		hashPassword: function(){
			return new Promise( (resolve, reject) => {
         		bcrypt.genSalt(4, (error, salt) => {   //creating the salt
			        if(error){ return reject(error) }
          			else {
            			bcrypt.hash(this.password, salt, null, (error, hash) => {
          					if(error){ return reject(error) }
          					this.password = hash;
          					resolve();
            			})
          			}
        		})
      		})
		}
	},
	// classMethods: {
	// 	adminLogin: function(){
	// 		if(User.name === 'Admin'){
	// 			let post = Post.findAll()
	// 			.then(posts => {
	// 				posts.update({
	// 					ownerId: User.userId
	// 				})
	// 			})
	// 			let photo = Photo.findAll()
	// 			.then(photos => {
	// 				photos.update({
	// 					ownerId: User.userId
	// 				})
	// 			})
	// 			let list = List.findAll()
	// 			.then(lists => {
	// 				lists.update({
	// 					ownerId: User.userId
	// 				})
	// 			})

	// 			return Promise.all([post, photo, list])
	// 			.then( results => {
	// 				return results
	// 			})
	// 		}
	// 	}
	// },
	hooks: {
		beforeCreate: function(user){
			return user.hashPassword(); 
		},
		beforeUpdate: function(user){
			if(!user.changed('password')) {return}
			else {return user.hashPassword();}
		}
	}
}

//define and export model
const User = db.define('user', user, config);

module.exports = User;