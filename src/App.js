import React, { Component } from 'react';
import boopic from './boopic.jpg';
import Buttons from './Buttons.js';
import './App.css';

class App extends Component {
  getResponse() {
    //so the API hook is this https://api.mixcloud.com/planetboo/cloudcasts/
    var xmlHttp = new XMLHttpRequest();
    var url = "https://api.mixcloud.com/planetboo/cloudcasts/";
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return(xmlHttp.responseText);
  }

  getUploads() {
    var response = this.getResponse();
    var responseParsed = JSON.parse(response);
    var shows = responseParsed.data;
  }

  render() {
    this.getUploads();
    
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