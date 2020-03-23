import React from 'react';
import './App.scss';
import Chart from './components/chart/chart'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    }
  }

  componentDidMount () {
    this.getChartData();
  }

  getChartData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then((results) => results.json())
      .then((chartData) => this.setState({ chartData }))
  }

  render() {
    return (
      <div className="App">
        <div>Cryptocurrency App</div>
        <div className="chartContainer">
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;
