import React, { Component } from 'react';
import boopic from './boopic.jpg';
import Buttons from './Buttons.js';
import Shows from './Shows.js';
import './App.css';

class App extends Component {
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
                        <Shows/>
                    </div>
                </div>
                <div name="mixcloud-widget"> 
                    <script src="//widget.mixcloud.com/media/js/widgetApi.js" type="text/javascript"></script>
                    <iframe id="mixcloud-iframe" title="mixcloud-iframe"/>
                    <script type="text/javascript">
                    var widget = Mixcloud.PlayerWidget(document.getElementById("mixcloud-iframe"));
                    widget.ready.then(function() {
                        // Put code that interacts with the widget here
                    });
                </script>
                </div>
            </div>
            );
        }
    }

export default App;