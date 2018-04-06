import React from 'react';
import axios from 'axios';

import UserInfoForm from './UserInfoForm';
import ShippingInfoForm from './ShippingInfoForm';
import CreditCardForm from './CreditCardForm';
import Confirmation from './Confirmation';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      view: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      billingZip: '',
      name: '',
      email: '',
      password: '',
      shipAddress1: '',
      shipAddress2: '',
      city: '',
      state: '',
      zip: 0,
      phone: '',
    };

    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    this.sendDataToDb = this.sendDataToDb.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmitButtonClick(e) {
    this.setState({ view: e.target.name });
    this.sendDataToDb(e);
  }

  sendDataToDb(e) {
    if (e.target.name === 'ShippingInfoForm') {
      axios.post('/user', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
        .then((response) => {
          console.log(response);
          this.setState({
            user_id: response.data,
          });
        })
        .catch(error => console.log(error));
    } else if (e.target.name === 'CreditCardForm') {
      axios.post('/shipping', {
        user_id: this.state.user_id,
        address1: this.state.shipAddress1,
        address2: this.state.shipAddress2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone: this.state.phone,
      })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    } else if (e.target.name === 'Confirmation') {
      axios.post('/credit', {
        user_id: this.state.user_id,
        creditcard: this.state.cardNumber,
        cvv: this.state.cvv,
        billing_zip: this.state.billingZip,
        expiry: this.state.expiry,
      })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }

  handleInputChange(e) {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  changeView() {
    const { view } = this.state;
    let display = '';

    if (view === '') {
      display = (<button
        name="UserInfoForm"
        className="checkOutButton"
        onClick={this.handleSubmitButtonClick}
      > Checkout </button>);
    } else if (view === 'UserInfoForm') {
      display = (<UserInfoForm
        text={this.handleInputChange}
        click={this.handleSubmitButtonClick}
      />);
    } else if (view === 'ShippingInfoForm') {
      display = (<ShippingInfoForm
        text={this.handleInputChange}
        click={this.handleSubmitButtonClick}
      />);
    } else if (view === 'CreditCardForm') {
      display = (<CreditCardForm
        text={this.handleInputChange}
        click={this.handleSubmitButtonClick}
      />);
    } else if (view === 'Confirmation') {
      display = (<Confirmation
        text={this.state}
        click={this.handleSubmitButtonClick}
      />);
    }
    return display;
  }

  render() {
    return (
      <div>
        { this.changeView() }
      </div>
    );
  }
}

export default Checkout;
