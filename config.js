const { Sequelize } = require('sequelize');
const fs = require('fs');
var DATABASE_URL = process.env.DATABASE_URL === undefined ? './userbot.db' : process.env.DATABASE_URL;
module.exports = {
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './userbot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG })
};