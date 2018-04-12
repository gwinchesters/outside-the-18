import React, {Component} from "react";
import PropTypes from "prop-types";

import SoundCloudWidget from "src/components/main/SoundCloudWidget";

import {PODCAST} from "src/util/constants";

class MainBodyContainer extends Component {

    render() {
        const {
            activeContent
        } = this.props;
        let content = null;
        if (activeContent === PODCAST) {
            content = 
                <div className="container box margin-top-lg">
                    <SoundCloudWidget id="ot18-iframe"/>
                </div>;
        }
        return (
            <div>
                {content}
            </div>  
        );
    }
}

MainBodyContainer.propTypes = {
    activeContent: PropTypes.string
};

export default MainBodyContainer;