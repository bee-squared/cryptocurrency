/* eslint-disable no-unused-vars */
import React from 'react';
import './App.scss';
import BarChart from './components/barChart/barChart';
import LineChart from './components/lineChart/lineChart';
import Utility from './components/utility/utility';
import Moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      values: [],
      startDate: Moment(this.getCurrentDate()).format('YYYY') + '-01-01',
      endDate: this.getCurrentDate(),
      chartType: 'Bar',
    }
  }

  componentDidMount = () => {
    this.getChartData();
  }

  handleDateChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value}, () => {this.getChartData()})
  }

  getCurrentDate = () => {
    let currentDate = new Date();
    currentDate = Moment(currentDate).format('YYYY-MM-DD');
    return currentDate;
  }

  getChartData = () => {
    let { dates, values, startDate, endDate } = this.state;
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
    .then((results) => results.json())
    .then((chartData) => this.setState({ dates: Object.keys(chartData.bpi), values: Object.values(chartData.bpi)}))
  }

  handleChartType = (e) => {
    const chartType = this.state;
    console.log(e.target.value)
    e.preventDefault();
    this.setState({ chartType: e.target.value })
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
    const { dates, values, startDate, endDate, chartType } = this.state;
    return (
      <div className="App">
        <div className="headerTitle">Cryptocurrency in USD (Bitcoin Index - BPI)</div>
        <div className="timeframe">
          <span className="timeframe-title">Current Time Series: </span>
          <span className="timeframe-value">{startDate} - {endDate}</span>
        </div>
        <div><Utility startDate={startDate} endDate={endDate} handleDateChange={this.handleDateChange} chartType={chartType} handleChartType={this.handleChartType}/></div>
        <div className="chartContainer">
          {chartType === 'Bar' ? <BarChart dates={dates} values={values} options={this.options}/> : null}
          {chartType === 'Line' ? <LineChart dates={dates} values={values} options={this.options}/> : null}
        </div>
      </div>
    );
  }
}

export default App;
