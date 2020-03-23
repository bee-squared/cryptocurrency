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

  componentWillMount() {
    this.getChartData();
  }

  getChartData = () => {

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
