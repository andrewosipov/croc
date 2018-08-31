import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './Header';
import Stepper from './Stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">

                <Header />
                <Stepper />
                <Step1 />
                <Step2 />

          </div>
        </Router>
    );
  }
}

export default App;
