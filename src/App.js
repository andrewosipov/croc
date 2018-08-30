import React, { Component } from 'react';
import Header from './components/Header';
import Stepper from './components/Stepper';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Stepper />
        <Step1 />
        <Step2 />
      </div>
    );
  }
}

export default App;
