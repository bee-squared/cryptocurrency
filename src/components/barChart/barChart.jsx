import React from 'react';
import { Bar } from 'react-chartjs-2';
import './barChart.scss';

class BarChart extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      chartData: {
        labels: [],
        hover: {
          axis: 'y',
          animationDuration: 400,
          intersect: true,
        },
        datasets: [{
          label: 'USD $',
          data: [],
          backgroundColor: 'rgba(252, 76, 2, 0.95)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 0.5,
          pointHoverBackgroundColor: 'white',
          pointBackgroundColor: 'rgb(192,192,192)',
          pointBackgroundBorderColor: 'black',
          pointRadius: 1,
          pointStyle: 'circle',
        }],
      }
    }
  }

  componentDidMount() {
    const chartData = this.state.chartData;
    const { dates, values } = this.props;

    if (dates !== undefined && values !== undefined) {
      chartData.labels = dates;
      chartData.datasets[0].data = values;

      console.log(chartData.labels)
      this.setState({ chartData });
    }
  }

  componentDidUpdate(prevProps) {
    const chartData = this.state.chartData;

    if (this.props.dates !== prevProps.dates) {
      chartData.labels = this.props.dates;
      this.setState({ chartData });
    }

    if (this.props.values !== prevProps.values) {
      chartData.datasets[0].data = this.props.values;
      this.setState({ labels: this.props.dates });
    }
  }

  render () {

    let { chartData } = this.state;
    let { options } = this.props;

    return (
      <div className="chart">
        <div className="barGraph">
          <Bar data={chartData} options={options} />
        </div>
        <div className="coinDesk">Powered by
          <span> </span>
          <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a>
        </div>
        <div>
        </div>
      </div>
    )
  }
  }

export default BarChart;