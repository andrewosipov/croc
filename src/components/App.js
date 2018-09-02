import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Header from './Header';
import Stepper from "../routes/Stepper";

import '../styles/App.css';


class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Stepper />
            </div>
        </Router>
    );
  }
}

export default App;
