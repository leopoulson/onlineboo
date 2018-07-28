import React, { Component } from 'react';
import Show from './Show.js'
import './App.css';

class Shows extends Component {
    getResponse() {
        //so the API hook is this https://api.mixcloud.com/planetboo/cloudcasts/
        var xmlHttp = new XMLHttpRequest();
        var url = "https://api.mixcloud.com/planetboo/cloudcasts/";
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        return(xmlHttp.responseText);
    }

    getUploads() {
        var response = this.getResponse();
        var responseParsed = JSON.parse(response);
        var shows = responseParsed.data;

        for (var i = 0; i < shows.length; i++) {
            console.log(shows[i]);
        }
    }

    render (){
        this.getUploads();
        return null;
    }
}

export default Shows;