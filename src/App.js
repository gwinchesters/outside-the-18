import React, {Component} from "react";
import {hot} from "react-hot-loader";

require("styles/base.scss");

class App extends Component {
    render() {
        return (
            <div>
                <p className="uk-text-success">
                    APPPPPP
                </p>
            </div>
        );
    }
}

export default hot(module)(App);
