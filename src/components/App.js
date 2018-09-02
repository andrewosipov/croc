import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Stepper from "../routes/Stepper";
import NotFound from "../routes/NotFound";
import Create from "../routes/Create";

import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path = '/step*' component={Stepper} />
                    <Route path = '/create' component={Create} />
                    <Route path = "*"  component = {NotFound} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
