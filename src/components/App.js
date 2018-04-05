import React, {Component} from "react";
import {hot} from "react-hot-loader";

import SoundCloudWidget from "src/components/SoundCloudWidget";

require("styles/base.scss");


class App extends Component {
    render() {
        return (
            <div>
                <SoundCloudWidget id="ot18-iframe"/>
            </div>
        );
    }
}

export default hot(module)(App);
