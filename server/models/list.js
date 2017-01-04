'use strict'

//import sql db and Sequelize
const Sequelize = require('sequelize');
const db = require('./db')
const Photo = require('./photo');
const imgProcess = require('lwip');

//schema
const list = {
	listId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	ownerId: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	tags: {
		type: Sequelize.ARRAY(Sequelize.TEXT),
		set: function (value) {

            var arrayOfTags; 
                   
          	arrayOfTags = value.split(',').map(function (s) {
              return s.trim();
          	});

            this.setDataValue('tags', arrayOfTags);
        }
	},
	listPhotos: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		defaultValue: []
	}
}

//config methods
//Tagging Lists 
//Photo is removed / added from list
//List is added/removed from user

const config = {
	instanceMethods: {
		// convertListPhotos: function(){
		// 	return List.findOne({
		// 		where: {
		// 			listId: req.params.listId
		// 		}
		// 	})
		// 	.then( foundList => {
		// 		let newListPhotos = foundList.dataValues.listPhotos;
		// 		let finalList = [];

		// 		this.listPhotos.map( photoInList => {
		// 			Photo.findOne({
		// 				where: {
		// 					photoId: photoInList
		// 				}
		// 			})
		// 			.then( photo => {
		// 				photoInList = photo.dataValues.imgUrl
		// 				finalList.push(photoInList);
		// 			})
		// 		})

		// 		foundList.update({
		// 			listPhotos: finalList
		// 		})

		// 		return foundList
		// 	})
		// },
		addPhotoToList: function(photo){
			return Photo.findOne({
				where: {
					photoId: photo.dataValues.photoId
				}
			})
			.then( photo => {
				photo.update({
					listIds: this.listId
				})
			})
		}, 
		removePhotoFromList: function(photo){
			Photo.findOne({
				where: {
					photoId: photo.dataValues.photoId
				},
				include: [{
					model: db.model('list'),
					where: {
						id: this.listId
					}
				}]
			})
			.then( photo => {
				listIds: []
			})
		},
		//change photoId to photo
		updatePhotoArray: function(listArray){
			return listArray.map(listPhoto => {
	  			return Photo.findOne({
	  				where: {
	  					photoId: listPhoto
	  				}
	  			})
	  			.then(photo => {
	  				listArray[listPhoto] = photo.dataValues.imgUrl
	  			})	
	  		})
		}
		
	},
	classMethods: {
		findByTag: function(tag){
			return List.findAll({
				where: {
					tags: {
						$overlap: this.tags
					},
					// id: {
					// 	$ne: this.listId
					// }
				}
			})
		},
	}
}


//define and export model
const List = db.define('list', list, config);

module.exports = List;