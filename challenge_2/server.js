const express = require('express');
const bodyParser = require('body-parser');

const router = require('./database/router');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
  router.userQuery(req, res);
});

app.post('/shipping', (req, res) => {
  router.shippingQuery(req, res);
});

app.post('/credit', (req, res) => {
  router.creditQuery(req, res);
});

app.listen(3000, () => console.log('listening on port 3000!'));

