import React, { Component } from 'react';
import boopic from './boopic.jpg';
import Buttons from './Buttons.js';
import Shows from './Shows.js';
import './App.css';

class App extends Component {
    loadShow() {
        player.load("planetboo/planet-boo-late-nite/", true).then(function(){

        });
    }

    render() {
        return (
            <div className="App">
            <script src="//widget.mixcloud.com/media/js/widgetApi.js" type="text/javascript"/>
                <div className="Content">
                    <div className="SideBar">
                        <img src={boopic} className="LogoStyle" alt="boo"/>
                        <Buttons/>
                    </div>
                    <div className="ShowBar">
                        <Shows onClick={this.loadShow()}/>
                    </div>
                </div>
                <div name="mixcloud-widget"> 
                    <script src="//widget.mixcloud.com/media/js/widgetApi.js" type="text/javascript"></script>
                    <iframe id="mixcloud-iframe" title="mixcloud-iframe"/>
                    <script type="text/javascript">
                        var player = Mixcloud.PlayerWidget(document.getElementById("mixcloud-iframe"));
                        player.ready.then(function(result, error) {    
                        });
                </script>
                </div>
            </div>
            );
        }
    }

export default App;