import React, { Component } from 'react';

const SDK_URL = '//widget.mixcloud.com/media/js/widgetApi.js';
const SDK_GLOBAL = 'Mixcloud';


class Mixcloud extends Component {
    render() {
        return (
            <iframe id="mixcloud-iframe"/>
        )
    }
}