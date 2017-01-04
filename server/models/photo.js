'use strict'

//import sql db and Sequelize
const Sequelize = require('sequelize');
const List = require('./list');
const db = require('./db')
const imgProcess = require('lwip');

//schema
const photo = {
	photoId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	ownerId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	imgUrl: {
		type: Sequelize.STRING,
		allowNull: false
	},
	tag: {
		type: Sequelize.ARRAY(Sequelize.STRING)
	},
	listIds: {
		type: Sequelize.ARRAY(Sequelize.INTEGER),
		defaultValue: []
	}
}

//config methods
//Tagging Photos (keywords)
// --> warning if photo already in list? --> sequelize
// convert photo id to photo url/folder

const config = {
	hooks: {
		beforeValidate: function(){
			// this.imgUrl = (`file:///Users/alexjennings/Desktop
			// 	/fitted/public/photos/${this.photoId}.jpg`)
			// return this
		},	
	},
	instanceMethods: {
		resizePhoto: function(){
			return imgProcess.open(this, function(err, img){
					img.batch().resize(300, 300)
					.catch(err)
			})
		}
	},
	classMethods: {
		associate: function(User){
			Photo.belongsTo(User, {
				foriegnKey: {
					allowNull: false
				}
			})
		}
	}
}


//define and export model
const Photo = db.define('photo', photo, config);

module.exports = Photo;