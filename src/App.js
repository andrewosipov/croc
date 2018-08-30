import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">Создание виртуальной машины</h1>
        </header>
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
