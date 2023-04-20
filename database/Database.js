const Sequelize = require('sequelize');

const connection = new Sequelize(
    'zoologico',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
        timezone: '-03:00',
        port: '3306'
    }
);

module.exports = connection;