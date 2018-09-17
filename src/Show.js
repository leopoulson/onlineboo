import React, { Component } from 'react';
import './App.css';

class Show extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render () {
        return (
        <div className="show"
        data-mixcloud-play-button={this.props.data.key}> {this.props.data.name} <img src={this.props.data.pictures.small}/></div>
        
        );
    }
}
export default Show;