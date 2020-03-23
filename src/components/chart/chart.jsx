import React from 'react';
import {Line} from 'react-chartjs-2'
import './chart.scss';

class Chart extends React.Component{
  constructor(props){
    super(props)
    console.log("constructor: ", props)
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

  componentDidUpdate() {
    let { labels } = this.state.chartData;
    let { data } = this.state.chartData.datasets[0];
    let { dates } = this.props;
    // this.setState({ lables: this.props.dates })
  }

  // static defaultProps = {
  //   displayTitle: true,
  //   displayLegend: true,
  //   legendPosition: 'bottom',
  // }

  render () {
    let {
      displayTitle,
      displayLegend,
      legendPosition
    } = this.state;

    const { dates, values } = this.props;

    let chartData = {
      labels: dates ? dates : [],
      datasets: [{
        label: 'USD $',
        data: values ? values : [],
        backgroundColor: 'rgb(252, 76, 2)',
        borderColor: 'rgb(255, 255, 255)',
      }]
    }

    console.log(chartData)

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