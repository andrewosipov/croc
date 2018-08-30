import React, { Component } from 'react';
import Header from './Header';
import Stepper from './Stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import '../styles/App.scss';

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
