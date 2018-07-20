import React, { Component } from 'react';

import getSDK from './utils';

const SDK_URL = '//widget.mixcloud.com/media/js/widgetApi.js';
const SDK_GLOBAL = 'Mixcloud';


class Mixcloud extends Component {
    load (url) {
        getSDK(SDK_URL, SDK_GLOBAL).then(Mixcloud => {
            this.player = Mixcloud.PlayerWidget(this.iframe);
        })
    }

    render() {
        return (
            <iframe id="mixcloud-iframe"/>
        )
    }
}

export default Mixcloud;