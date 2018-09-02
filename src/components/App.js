import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Header from './Header';
import Step1 from './Step1';
import Step2 from './Step2';
import NotFound from './NotFound';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path = '/step1' component={Step1} />
                    <Route path = '/step2' component={Step2} />
                    <Redirect from = "/" to = "/step1" />
                    <Route path = "*"  component = {NotFound} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
