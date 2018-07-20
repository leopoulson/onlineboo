import React, { Component } from 'react';
import logo from './logo.svg';
import boopic from './boopic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="Sidebar" className="Sidebar"/>
        <img src={boopic} />
      </div>
    );
  }
}

export default App;