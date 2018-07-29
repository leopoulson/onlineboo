import React, { Component } from 'react';
import boopic from './boopic.jpg';
import Buttons from './Buttons.js';
import Shows from './Shows.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Content">
                    <div className="SideBar">
                        <img src={boopic} className="LogoStyle" alt="boo"/>
                        <Buttons/>
                    </div>
                    <div className="ShowBar">
                        <Shows/>
                    </div>
                </div>
            </div>
            );
        }
    }

export default App;