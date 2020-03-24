import React from 'react';
import {Line} from 'react-chartjs-2'
import './chart.scss';

class Chart extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      chartData: {
        labels: [],
        datasets: [{
          label: 'USD $',
          data: [],
          backgroundColor: 'rgba(252, 76, 2, 0.95)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: .5,
        }],
      }
    }
  }

  componentDidUpdate (prevProps) {
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

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom',
  }

  render () {
    let {
      displayTitle,
      displayLegend,
      legendPosition
    } = this.state;

    let { chartData } = this.state;

    return (
      <div className="chart">
        <div className="lineGraph">
          <Line
            data={chartData}
            options={{
              title: {
                display: displayTitle,
                text:'Cryptocurrency in USD',
                position: 'top',
                align: 'left'
              },
              legend: {
                display: displayLegend,
                position: legendPosition,
                labels: {
                  fontColor: 'black',
                  fontSize: 25,
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
                  gridLines: {
                    color: 'rgb(0,0,0)'
                  }
                }]
              }
            }}
          />
        </div>
        <div className="coinDesk">Powered by
          <span> </span>
          <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a>
        </div>
      </div>
    )
  }
  }

  export default Chart;