'use strict'

//import sql db and Sequelize
const Sequelize = require('sequelize');
const List = require('./list');
const db = require('./db')

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
		//resize photo
	//  beforeCreate: function(){
	// 		this.update({
	// 			width: 320,
	// 			height: 220
	// 		})
	// 	}	
	},
	instanceMethods: {

	},
	classMethods: {
	}
}


//define and export model
const Photo = db.define('photo', photo, config);

module.exports = Photo;