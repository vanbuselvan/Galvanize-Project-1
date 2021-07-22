
import './App.css';
import React, { Component } from 'react';
import Calculator from './components/calculator'
import Header from './components/header.js';

class App extends Component {
  render() {
    return (<div>
      <Header />
      <Calculator />
    </div>)
  }
}

export default App;
