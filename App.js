import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Graph from "./graph";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
      super();
  }
  componentDidMount() {
      // console.log(window.innerHeight,"  ",window.innerWidth);
  }

  render() {
      return (
          <Router basename='/'>
              <Switch>
 
                  <Route path='/' component={Graph}/>
                  

              </Switch>
          </Router>
      );
  }
}

export default App;
