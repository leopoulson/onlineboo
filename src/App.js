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
            <div id="buttons" className="ButtonStyle">
              <button id="streamButton" className="button">stream</button>
              <button id="aboutButton" className="button">about</button>
              <button id="facebookButton" className="button">facebook</button>
            </div>
          </div>
          <div className="ShowBar">
          </div>
        </div>
      </div>
    );
  }
}

export default App;