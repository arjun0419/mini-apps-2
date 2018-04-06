const { Client } = require('pg');

const db = new Client({
  // user: 'aj2016',
  host: 'localhost',
  database: 'checkout',
  // password:"",
});

db.connect();


module.exports.db = db;
