import React, { Component } from 'react';
import Header from './components/Header';
import Stepper from './components/Stepper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Stepper />
        <div className="filter"></div>
        <div className="item-list"></div>
        <div className="form"></div>
        <div className="buttons"></div>
      </div>
    );
  }
}

export default App;
