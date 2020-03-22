export default class Chart extends React.Component{
  constructor(props){
    super(props)
    this.state={
      chartData: {
        labels: this.props.date,
        datasets: [{
          data: {
            labels: ['Item 1', 'Item 2', 'Item 3'],
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: fillPattern
            }]
          }
        }]
      }
    }
  }