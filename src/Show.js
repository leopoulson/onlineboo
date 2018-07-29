import React, { Component } from 'react';
import './App.css';

class Show extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
        <div> {this.props.data.name} </div>
        );
    }
}
export default Show;