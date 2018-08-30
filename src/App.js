import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="stepper">
        </div>
        <div className="filter"></div>
        <div className="item-list"></div>
        <div className="form"></div>
        <div className="buttons"></div>
      </div>
    );
  }
}

export default App;
