import React, {Component} from "react";
import {hot} from "react-hot-loader";

require("styles/base.scss");


const logoSrc = require("resources/img/logo.png");


class App extends Component {
    render() {
        return (
            <div className="uk-inline">
                <img
                    id="customer-logo-img"
                    className="uk-position-fixed uk-position-center"
                    src={logoSrc}
                />
            </div>
        );
    }
}

export default hot(module)(App);
