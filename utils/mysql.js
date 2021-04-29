const mysql = require("mysql");
const login = require("../data/botlogin.json");

config={
    host: db.config.host,
    user: db.config.username,
    password: db.config.password,
    database: db.config.database,
    supportBigNumbers: true,
	bigNumberStrings: true,
	multipleStatements: true
}

const pool = mysql.createPool(config);

exports.con = pool;
exports.mysql = mysql;