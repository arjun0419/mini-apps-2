let mongoose = require('mongoose');
let { fakeData } = require('./fakeData');

mongoose.connect('mongodb://localhost/cryptos');


let db = mongoose.connection;

db.once('open', () => {
  console.log('connected to mongoDB');
});

db.cryptos.remove({});

let CryptoSchema = mongoose.Schema({
  type: String,
  time_period_start: String,
  time_period_end: String,
  time_open: String,
  time_close: String,
  price_open: Number,
  price_high: Number,
  price_low: Number,
  price_close: Number,
  volume_traded: Number,
  trades_count: Number,
});

let Crypto = mongoose.model('Crypto', CryptoSchema);

fakeData.forEach((item) => {
  item.currency = 'BTC';
});

Crypto.collection.insert(fakeData, (err, docs) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`inserted ${docs.length} documents`);
  }
});
