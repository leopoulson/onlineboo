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
            <div className="showName">
                {this.props.data.name} 
            </div>
        </div>
        
        );
    }
}
export default Show;