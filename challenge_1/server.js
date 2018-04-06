const express = require('express');
const db = require('./database/db');

const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => res.send());

app.get('/cryptos/BTC', (req, res) => {
  console.log(req);
  db.fetchDBdata(req.params.id).then(data => res.send(data));
});

app.listen(3000, () => console.log('app listening on port 3000!'));

