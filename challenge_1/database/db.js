let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cryptos');

let db = mongoose.connection;

let fetchDBdata = (query) => {
  return db.find({ currency: query });
};

module.exports.fetchDBdata = fetchDBdata;
