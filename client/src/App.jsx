import React from 'react';
import './App.scss';
import Chart from './chart/chart'
import {Line} from 'react-chartjs'

function App() {

  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45]
          }]
      },

      // Configuration options go here
      options: {}
  });

  return (
    <div className="App">
      <div>Cryptocurrency App</div>

    </div>
  );
}

export default App;
