const axios = require('axios');

const url = '/cryptos/';

module.exports.serverRequest = (crypto) => {
  console.log('sent:', `${url}${crypto}`);
  axios.get(`${url}${crypto}`)
    .then(response => (response))
    .catch((error) => {
      console.log(error);
    });
};
