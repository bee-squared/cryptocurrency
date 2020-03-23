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
          backgroundColor: 'rgb(252, 76, 2)',
          borderColor: 'rgb(255, 255, 255)',
        }]
      }
    }
  }

  componentDidUpdate (prevProps) {
    const chartData = this.state.chartData;
    if (this.props.dates !== prevProps.dates) {
      chartData.labels = this.props.dates;
      this.setState({ chartData: chartData });
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
            }
          }}
        />
      </div>
    )
  }
  }

  export default Chart;