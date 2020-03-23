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
    let data = {"bpi":{"2013-09-01":128.2597,"2013-09-02":127.3648,"2013-09-03":127.5915,"2013-09-04":120.5738,"2013-09-05":120.5333},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.","time":{"updated":"Sep 6, 2013 00:03:00 UTC","updatedISO":"2013-09-06T00:03:00+00:00"}}
    // fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
    //   .then((results) => results.json())
    //   .then((chartData) => this.setState({ dates: Object.keys(chartData.bpi), values: Object.values(chartData.bpi) }))
    this.setState({ dates: Object.keys(data.bpi), values: Object.values(data.bpi) })
  }

  render() {
    const { dates, values } = this.state;
    return (
      <div className="App">
        <div>Cryptocurrency App</div>
        <div className="chartContainer">
          <Chart dates={dates} values={values} />
        </div>
      </div>
    );
  }
}

export default App;
