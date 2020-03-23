import React from 'react';
import {Line} from 'react-chartjs-2'
import './chart.scss';

class Chart extends React.Component{
  constructor(props){
    super(props)
    this.state={
      chartData: {
        labels: ['Boston', 'Denver', 'Seattle', 'Miami'],
        datasets: [{
          label: 'Population',
            data: [10, 20, 15, 30, 20, 15, 28, 44],
            backgroundColor: 'rgb(252, 76, 2)',
            borderColor: 'rgb(255, 255, 255)',
        }]
      }
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
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
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
              // margin: 'auto',
            }
          }}
        />
      </div>
    )
  }
  }

  export default Chart;