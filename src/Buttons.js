import React, { Component } from 'react';

class Buttons extends Component {

    render() {
        return <div id="buttons" className="ButtonStyle">
                  <button id="streamButton" className="button">stream</button>
                  <button id="aboutButton" className="button">about</button>
                  <button id="facebookButton" className="button">facebook</button>
               </div>
    }
}



export default Buttons;