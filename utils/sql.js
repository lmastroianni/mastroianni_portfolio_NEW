const config = require("../config");
const sql = require('mysql');

const connect = sql.createConnection({
    host: config.host,
    port: config.port,
    user: config.uname,
    password: config.pword,
    database: config.dbase,
    connectionLimit : 20,  // pool
    queueLimit : 100,  //pool
    waitForConnections : true //pool
});

module.exports = connect;