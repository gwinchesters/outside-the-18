import React, {Component} from "react";
import Image from "src/components/Image";

const logoSrc = require("resources/img/ot18Logo.png");


class LandingPage extends Component {

    render() {

        return (
            <div className="">
                <Image
                    id="homepage-logo"
                    imgSrc={logoSrc}
                    classVal="uk-animation-fade uk-margin-auto uk-position-center"
                    height="65%"
                    width="65%"
                />
            </div>
        );
    }
}

export default LandingPage;