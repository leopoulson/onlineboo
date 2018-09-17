import React, { Component } from 'react';
import './App.css';

class Show extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render () {
        return (
        <div className="show" data-mixcloud-play-button={this.props.data.key}> 
            <img className="thumbnail" src={this.props.data.pictures.large}/>
            {this.props.data.name} 
        </div>
        
        );
    }
}
export default Show;