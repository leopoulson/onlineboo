import React, { Component } from 'react';
import boopic from './boopic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Content">
          <div className="SideBar">
            <img src={boopic} className="LogoStyle" alt="boo"/>
          </div>
          <div className="ShowBar">
          </div>
        </div>
      </div>
    );
  }
}

export default App;