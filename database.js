const Sequelize = require('sequelize');
const DB_NAME = 'postgres'
const USER_NAME = 'admin'
const PASSWORD = '123456'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    query: {
        raw: true
    }
})

module.exports = sequelize
