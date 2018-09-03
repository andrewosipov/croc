import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Stepper from "../routes/Stepper";
import NotFound from "../routes/NotFound";
import Success from "../routes/Success";
import Create from "../routes/Create";

import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path = '/create' component={Create} />
                    <Route path = '/success' component={Success} />
                    <Route path = '/' component={Stepper} />
                    <Route path = '/step*' component={Stepper} />
                    <Route path = "*"  component = {NotFound} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
