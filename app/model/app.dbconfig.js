'user strict';
const mysql = require('mysql');
const arnoa_dev = {
    host: 'localhost',
    user: 'root',
    password: '3000setomars',
    database: 'utn_dev',
    multipleStatements: true
};

const config = arnoa_dev;
const pool = mysql.createPool(config);
module.exports = pool;

