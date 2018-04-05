const formatData = (data) => {
  const labels = [];
  const dataSet = [];
  let lastDay = '';
  let firstDay = '';
  data.forEach((item, index) => {
    if (index === 0) {
      firstDay = item.time_close.slice(0,10);
    } else if (index === data.length - 1) {
      lastDay = item.time_close.slice(0,10);
    }
    labels.push(item.time_period_start.slice(0, 10));
    dataSet.push(item.price_close);
  });

  const dataFormatted = {
    labels,
    datasets: [{
      label: `Bitcoin Closing Price from ${firstDay} to ${lastDay} `,
      data: dataSet,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }],
  };
  return dataFormatted;
};

export default formatData;
