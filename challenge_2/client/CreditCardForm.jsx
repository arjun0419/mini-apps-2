import React from 'react';

const CreditCardForm = ({ click, text }) => (
  <div>
    cardNumber:
    <input
      name="cardNumber"
      onChange={e => text(e)}
    />
    <br />
    expiry:
    <input
      name="expiry"
      onChange={e => text(e)}
    />
    <br />
    cvv:
    <input
      name="cvv"
      onChange={e => text(e)}
    />
    <br />
    billing Zip Code:
    <input
      name="billingZip"
      onChange={e => text(e)}
    />
    <br />
    <button name="Confirmation" onClick={e => click(e)}>Submit</button>
  </div>
);

export default CreditCardForm;
