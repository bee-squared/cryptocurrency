/* eslint-disable no-unused-vars */
import React from 'react';
import './App.scss';
import Chart from './components/chart/chart'

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
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then((results) => results.json())
      .then((chartData) => this.setState({ dates: Object.keys(chartData.bpi), values: Object.values(chartData.bpi) }))
  }

  render() {
    const { dates, values } = this.state;
    return (
      <div className="App">
        <div className="headerTitle">Cryptocurrency in USD (Bitcoin Index - BPI)</div>
        <div className="timeframe">Last 30 Days</div>
        <div className="chartContainer">
          <Chart dates={dates} values={values} />
        </div>
      </div>
    );
  }
}

export default App;
