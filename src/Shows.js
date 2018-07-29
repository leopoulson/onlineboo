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

        return shows;
    }

    renderShow(props) {
        return <Show data={props}></Show>
    }

    render (){
        var shows = this.getUploads();
        return (<div>
            {shows.map((show) => this.renderShow(show))}
         </div>);
        }
    }


export default Shows;