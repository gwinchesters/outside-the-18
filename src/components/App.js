import React, {Component} from "react";
import {hot} from "react-hot-loader";
import {auth, provider} from "src/components/firebase";

import SoundCloudWidget from "src/components/SoundCloudWidget";

require("styles/base.scss");


class App extends Component {
    render() {
        auth.signInWithPopup(provider) 
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });

        return (
            <div>
                <SoundCloudWidget id="ot18-iframe"/>
            </div>
        );
    }
}

export default hot(module)(App);
