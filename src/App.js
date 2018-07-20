import React, { Component } from 'react';
import boopic from './boopic.jpg';
import Buttons from './Buttons.js';
import Mixcloud from './Mixcloud.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Content">
          <div className="SideBar">
            <img src={boopic} className="LogoStyle" alt="boo"/>
            <Buttons/>
            <button className="button" onclick="">mixcloud-play</button>
          </div>
          <div className="ShowBar">
          </div>
        </div>
      </div>
    );
  }
}

export default App;