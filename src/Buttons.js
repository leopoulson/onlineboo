import React, { Component } from 'react';
import Shows from './Shows.js';

class Buttons extends Component {
    constructor(props) {
        super(props);
    }

    streamButtonClicked () {
        window.open('https://www.mixlr.com/planetboo', '_blank');
    }

    aboutButtonClicked () {

    }

    facebookButtonClicked () {
        window.open('https://www.facebook.com/booplanet2/', '_blank');
    }

    render() {
        return <div id="buttons" className="ButtonStyle">
                  <button id="streamButton" className="button" onClick={this.streamButtonClicked}>stream</button>
                  <button id="aboutButton" className="button" onClick={this.aboutButtonClicked}>about</button>
                  <button id="facebookButton" className="button" onClick={this.facebookButtonClicked}>facebook</button>
                  <button id="blogButton" className="button" onClick={this.props.showBlog}>blog</button>
                  <button id="showsButton" className="button" onClick={this.props.showShows}>shows</button>
            </div>;
    }
}

export default Buttons;
