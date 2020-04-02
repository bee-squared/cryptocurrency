/* eslint-disable no-unused-vars */
import React from 'react';
import './App.scss';
import BarChart from './components/barChart/barChart';
import Utility from './components/utility/utility';
import Moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      values: [],
      startDate: '2020-01-01',
    }
  }

  componentDidMount () {
    this.getChartData();
  }

  updateDates(startDate, endDate) {

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
    responsiveAnimationDuration: 700,
    animation: {
      duration: 800,
      easing: 'easeOutSine',
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
          color: 'rgb(0,0,0)',
          display: false,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: false,
        },
        gridLines: {
          color: 'rgb(0,0,0)',
        }
      }]
    },
  }

  render() {
    const { dates, values } = this.state;
    return (
      <div className="App">
        <div className="headerTitle">Cryptocurrency in USD (Bitcoin Index - BPI)</div>
        <div className="timeframe">
          <span className="timeframe-title">Current Time Series: </span>
          <span className="timeframe-value">2020 YTD</span>
        </div>
        <div><Utility/></div>
        <div className="chartContainer">
          <BarChart dates={dates} values={values} options={this.options}/>
        </div>
      </div>
    );
  }
}

export default App;
