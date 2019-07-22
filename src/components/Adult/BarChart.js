import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class BarChart extends Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        },
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
      }
    }

    render() {
      return (
        

        <div id="chart">
          <ApexCharts options={this.state.options} series={this.state.series} type="bar" height="350" />
        </div>


      );
    }
  }

  const domContainer = document.querySelector('#app');
        ReactDOM.render(React.createElement(BarChart), domContainer);


  export default BarChart;
