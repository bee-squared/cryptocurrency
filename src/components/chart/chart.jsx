import React from 'react';
import {Line} from 'react-chartjs-2'
import './chart.scss';

class Chart extends React.Component{
  constructor(props){
    super(props)
    this.state={
      chartData: {
        labels: this.props.date,
        datasets: [{
          data: {
            labels: ['Item 1', 'Item 2', 'Item 3'],
            datasets: [{
                data: [10, 20, 30]
            }]
          }
        }]
      }
    }
  }

    render () {
      return (
        <div className="chartContainer">
          <Line />
        </div>
      )
    }
  }

  export default Chart;