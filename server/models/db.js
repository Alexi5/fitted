//create sequelize instance and set it to new db
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/fitted', { logging: false });

//export synched models
module.exports = db;