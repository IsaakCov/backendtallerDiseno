const {Sequelize} = require('sequelize');

const conn = new Sequelize("tallerDiseno", "root", "",{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conn;