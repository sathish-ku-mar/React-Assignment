import React from 'react';
import Chart from "react-apexcharts";

class Relationship extends React.Component {

    constructor(props) {
        super(props);

        let data = []
        let categories = []
        let posts = null
        posts = this.props.map((post, i )=> {
            data.push(post.count);
            categories.push(post.relationship)
        })
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: categories
            }
          },
          series: [
            {
              name: "series-1",
              data: data
            }
          ]
        };

      }

      render() {
        return (
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="bar"
                  width="500"
                />
              </div>
            </div>
          </div>
        );
      }

  }

export default Relationship;
