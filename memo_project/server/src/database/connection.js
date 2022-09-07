const mysql = require('mysql');
const connectioninfo = require('../config/db-config');

console.log(connectioninfo);
const getConnection = () => {

    return mysql.createConnection(connectioninfo);
}

module.exports = getConnection;