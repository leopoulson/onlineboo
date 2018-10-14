import React, { Component } from 'react';
import './Show.css';

class Show extends Component {
    constructor(props) { 
        super(props);
    }

    render () {
        return (
        <div>
            <div className="show" data-mixcloud-play-button={this.props.data.key}> 
                <div className="thumbnailBox">
                    <img className="thumbnail" src={this.props.data.pictures.large}/>
                </div>
                <div className="showContent">
                    <div className="showName">
                        <p className="showNameText">
                            {this.props.data.name} 
                        </p>
                    </div>
                </div>
            </div>
            <div className="showDivider"/>
        </div>
        );
    }
}
export default Show;