import React from 'react';

const ShippingInfoForm = ({ text, click }) => (
  <div>
    Shipping Address line 1:
    <input
      name="shipAddress1"
      onChange={e => text(e)}
    />
    <br />
    Shipping Address line 2:
    <input
      name="shipAddress2"
      onChange={e => text(e)}
    />
    <br />
    City:
    <input
      name="city"
      onChange={e => text(e)}
    />
    <br />
    State:
    <input
      name="state"
      onChange={e => text(e)}
    />
    <br />
    Zip Code:
    <input
      name="zip"
      onChange={e => text(e)}
    />
    <br />
    phone:
    <input
      name="phone"
      onChange={e => text(e)}
    />
    <br />
    <button name="CreditCardForm" onClick={e => click(e)}>Submit</button>
  </div>
);

export default ShippingInfoForm;
