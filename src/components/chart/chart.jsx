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

    render () {
      return (
        <div className="chartContainer">
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                text:'Cryptocurrency in USD',
                position: 'top',
                align: 'left'
              },
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  fontColor: 'black'
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