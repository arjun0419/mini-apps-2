import React from 'react';
import Chart from './Chart';
import {serverRequest} from './lib/serverRequest';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleClick(event) {
    this.setState({ data: serverRequest(event.target.value) });
  }

  render() {
    return (
      <div>
        <button value="BTC" onClick={this.handleClick}>Bitcoin </button>
        <button value="ETH" onClick={this.handleClick}>Ethereum </button>
        <button value="RPL" onClick={this.handleClick}>BethCoin </button>
        <Chart data={this.state.data}/>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Home;
