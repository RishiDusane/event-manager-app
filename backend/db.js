

const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password:"Your DB Password",// "Rishi@2830",
    database: "Eventdb"
});

module.exports = db;