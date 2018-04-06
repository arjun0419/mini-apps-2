import React from 'react';

const UserInfoForm = ({ text, click }) => (
  <div>
    name:
    <input
      name="name"
      onChange={e => text(e)}
    />
    <br />
    email:
    <input
      name="email"
      onChange={e => text(e)}
    />
    <br />
    password:
    <input
      name="password"
      onChange={e => text(e)}
    />
    <br />
    <button name="ShippingInfoForm" onClick={e => click(e)}>Submit</button>
  </div>
);

export default UserInfoForm;
