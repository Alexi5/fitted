//sequelized session
const Sequelize = require('sequelize');
const db = require('./db');
const randomString = require('../Server-Utils/randomString.js')

const session = {
	sessionId: {
      type: Sequelize.STRING,
      primaryKey: true
    }
}

const sessionStore = {};

// //config methods
// const config = {
// 	add: function(userId) {
// 		return randomString()
// 		.then(randomizedString => {
// 			console.log('random: ', randomString)
// 			sessionStore[randomizedString] = userId
// 			return randomizedString;
// 		})
// 	},
// 	remove: function(randomizedString){
// 		delete sessionStore[randomizedString];
// 	}
// }

// //define and export
// const Session = db.define('session', session, config);


module.exports = {
	add: function(userId) {
		return randomString()
		.then(randomizedString => {
			console.log('random: ', randomString)
			sessionStore[randomizedString] = userId
			return randomizedString;
		})
	},
	remove: function(randomizedString){
		delete sessionStore[randomizedString];
	}
}; 

// //config methods
// const config = {
// 	add: function(userId) {
// 		return randomString()
// 		.then(randomizedString => {
// 			sessionStore[randomizedString] = userId
// 			return randomizedString;
// 		})
// 	},
// 	remove: function(randomizedString){
// 		delete sessionStore[randomizedString];
// 	}
// }

