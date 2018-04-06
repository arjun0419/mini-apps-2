const { db } = require('./db');

module.exports = {
  userQuery: (req, res) => {
    const values = [req.body.name, req.body.password, req.body.email];
    db.query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING user_id', values, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result.rows[0].user_id);
      }
    });
  },
  shippingQuery: (req, res) => {
    const values = [
      Number(req.body.user_id),
      req.body.address1,
      req.body.address2,
      req.body.city,
      req.body.state,
      Number(req.body.zip),
      Number(req.body.phone),
    ];
    db.query('INSERT INTO address(user_id, address1, address2, city, state, zip, phone) VALUES ($1, $2, $3, $4, $5, $6, $7)', values, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  },
  creditQuery: (req, res) => {
    const values = [
      req.body.user_id,
      req.body.creditcard,
      req.body.cvv,
      req.body.billing_zip,
      req.body.expiry,
    ];
    db.query('INSERT INTO credit(user_id, creditcard, cvv, billing_zip, expiry) VALUES ($1, $2, $3, $4, $5)', values, (err, result) => {
      console.log('hi');
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  },
};
