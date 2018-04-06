import React from 'react';

const Confirmation = ({ text, click }) => (
  <div>
    name: {text.name}
    <br />
    email: {text.email}
    <br />
    shipAddress1: {text.shipAddress1}
    <br />
    shipAddress2: {text.shipAddress2}
    <br />
    shipAddress1: {text.shipAddress1}
    <br />
    city: {text.city}
    <br />
    state: {text.state}
    <br />
    zip: {text.zip}
    <br />
    phone: {text.phone}
    <br />
    cardNumber: {text.cardNumber}
    <br />
    expiry: {text.expiry}
    <br />
    cvv: {text.cvv}
    <br />
    billingZip: {text.billingZip}
    <br />
    <button name="" onClick={e => click(e)}>Submit</button>
  </div>
);

export default Confirmation;
