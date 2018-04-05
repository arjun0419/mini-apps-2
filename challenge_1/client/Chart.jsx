import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Line
        ref="chart"
        data= {[]}
        width={100}
        height={50}
      />
    );
  }
}

export default Chart;
