import React, {Component} from "react";
import {hot} from "react-hot-loader";

import HomePageContainer from "src/containers/HomePageContainer";
import Image from "src/components/Image";

require("styles/base.scss");

const logoSrc = require("resources/img/ot18Logo.png");


class App extends Component {
    render() {
        return (
            <div>
                <Image
                    imgSrc={logoSrc}
                    classVal={"uk-animation-fade uk-margin-auto uk-position-center"}
                />
                <HomePageContainer/>
            </div>
        );
    }
}

export default hot(module)(App);
