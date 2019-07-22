import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Adult from './components/Adult/Adult';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Assignment</h1>
        <Switch>
            <Route path="/" component={Adult} />
        </Switch>
      </div>
    );
  }
}

export default App;
