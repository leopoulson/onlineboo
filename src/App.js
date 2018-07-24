import React, { Component } from 'react';
import boopic from './boopic.jpg';
import Buttons from './Buttons.js';
import './App.css';

class App extends Component {
  getUploads() {
    //so the API hook is this https://api.mixcloud.com/spartacus/cloudcasts/
  }
  render() {
    return (
      <div className="App">
        <div className="Content">
          <div className="SideBar">
            <img src={boopic} className="LogoStyle" alt="boo"/>
            <Buttons/>
          </div>
          <div className="ShowBar">
          </div>
          <div data-mixcloud-play-button="/planetboo/planet-bootyshakers/">Click 4 bootyshakers</div>
        </div>
      </div>
    );
  }
}

export default App;