import React, { Component } from 'react';

import getSDK from './utils';

const SDK_URL = '//widget.mixcloud.com/media/js/widgetApi.js';
const SDK_GLOBAL = 'Mixcloud';


export default class Mixcloud extends Component {
    static displayName = 'Mixcloud';
    player = null;

    load () {
        getSDK(SDK_URL, SDK_GLOBAL).then(Mixcloud => {
            this.player = Mixcloud.PlayerWidget(this.iframe);
            this.player.ready.then(function(result, error){});
        })
    }

    render() {
        // this.load();
        return (
            //<iframe>
            //    player;
            //</iframe>
            <iframe id="mixcloud-iframe" title="mixcloud-iframe"/>

        )
    }
}