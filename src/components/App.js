import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Stepper from "../routes/Stepper";

import '../styles/App.css';
import Step1 from "./Step1";
import Step2 from "./Step2";
import NotFound from "../routes/NotFound";


class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path = '/step*' component={Stepper} />
                    <Redirect from = "/" to = "/step1" />
                    <Route path = "*"  component = {NotFound} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
