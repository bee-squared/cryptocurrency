/* eslint-disable no-unused-vars */
import React from 'react';
import './App.scss';
import LineChart from './components/lineChart/lineChart';
import Moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      values: [],
    }
  }

  componentDidMount () {
    this.getChartData();
  }

  getChartData = () => {
    const { dates, values } = this.state;
    let currentDate = new Date();
    let currentYear = Moment(currentDate).format('YYYY')
    currentDate = Moment(currentDate).format('YYYY-MM-DD');
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${currentYear}-01-01&end=${currentDate}`)
      .then((results) => results.json())
      .then((chartData) => this.setState({ dates: Object.keys(chartData.bpi), values: Object.values(chartData.bpi) }))
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom',
  }

  options = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 200,
    animation: {
      duration: 2000,
      easing: 'linear',
    },
    title: {
      display: this.props.displayTitle,
      text:'Cryptocurrency in USD',
      position: 'top',
      align: 'left',
      fontColor: 'Black',
    },
    legend: {
      display: this.props.displayLegend,
      position: this.props.legendPosition,
      labels: {
        fontColor: 'black',
        fontSize: 10,
      }
    },
    layout: {
      margin: 'auto',
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgb(0,0,0)'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: false,
        },
        gridLines: {
          color: 'rgb(0,0,0)'
        }
      }]
    },
  }

  render() {
    const { dates, values } = this.state;
    return (
      <div className="App">
        <div className="headerTitle">Cryptocurrency in USD (Bitcoin Index - BPI)</div>
        <div className="timeframe">2020 YTD</div>
        <div className="chartContainer">
          <LineChart dates={dates} values={values} options={this.options}/>
        </div>
      </div>
    );
  }
}

export default App;
