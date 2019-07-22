import React, {Component, useState} from 'react';
import Sex from '../Sex/Sex';
import Relationship from '../Relationship/Relationship';
import classes from './Adult.css';
import axios from '../../axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

class Adult extends Component {
  state = {
    data: null,
    relationship: null,
    sex: null,
    error: true,
    filters: {
        sex: true,
        race: true,
        relationship: true
      }
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:8000/assignment/api/')
      .then(response => {
        this.setState({data: response.data.data, relationship: response.data.relationship, sex: response.data.sex});
      }).catch(error => {
        this.setState({error: false})
      });
  }

  
  render () {
    let relationships = null
    let sex = null
    let columns = []
    let table = null
    let posts = <p style={{textAlign: 'center'}}>Somethig went wrong!</p>
    if (this.state.sex) {
        const instance = new Sex(this.state.sex);
        sex = instance.render();

        const filters = ['relationship', 'race', 'sex'];
        Object.keys(this.state.data[0]).forEach(element => {
          var n = filters.includes(element);
          if (n){
            columns.push({
              dataField: element,
              text: element.toUpperCase(),
              filter: textFilter()
              })
          }else{
            columns.push({
              dataField: element,
              text: element.toUpperCase()
              })
          }
        });

        table = <BootstrapTable keyField='id' data={ this.state.data } columns={ columns } pagination={ paginationFactory() } filter={ filterFactory() } />

      }

      if (this.state.relationship) {
        const instance = new Relationship(this.state.relationship);
        relationships = instance.render();
      }
      
    return (
        <div>
          <div className={classes.container}>
              <span className={classes.leftcolumn}>
                  <h2>Distribution of number of males and females</h2>
              {sex}
              </span>
              <span className={classes.rightcolumn}>
                  <h2>Number of people in each relationship status</h2>
              {relationships}
              </span>
          </div>
            <section>
            {table}
        </section>
        </div>

    )
  }
}


export default Adult;



