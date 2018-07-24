import React, { Component } from 'react';
import boopic from './boopic.jpg';
import Buttons from './Buttons.js';
import Mixcloud from './Mixcloud.js';
import './App.css';

class App extends Component {
  mixcloudPlayClicked() {
    //Mixcloud.load("https://www.mixcloud.com/planetboo/planet-boo-late-nite/");
    Mixcloud.load();
  }

  render() {
    //this.player = Mixcloud.Mixcloud;
    return (
      <div className="App">
        <div className="Content">
          <div className="SideBar">
            <img src={boopic} className="LogoStyle" alt="boo"/>
            <Buttons/>
            <button className="button" onClick={this.mixcloudPlayClicked}>mixcloud-play</button>
           
          </div>
          <div className="ShowBar">
          </div>
        </div>
      </div>
    );
  }
}

export default App;