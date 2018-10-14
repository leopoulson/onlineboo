import React, { Component } from 'react';
import './Show.css';

class Show extends Component {
    constructor(props) { 
        super(props);
    }

    parseLength(length) {
        var strLength = "";
        var minutes = (~~(length / 60)) % 60; 
        var hours = ~~(length / 3600); //truncated division

        if (hours > 0) {
            strLength += hours; //convert hours to string
            strLength += "h";
        }
        strLength += " "
        
        if (minutes > 0)
            strLength += (minutes);

        return strLength;
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
                    <div name="information">
                        <div name="time" className="showTime">
                            <p className="showTimeText">
                                {this.parseLength(this.props.data.audio_length)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="showDivider"/>
        </div>
        );
    }
}
export default Show;