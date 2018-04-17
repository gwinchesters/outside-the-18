import React, {Component} from "react";

import SoundCloudWidget from "src/components/SoundCloudWidget";

class PodcastPageContainer extends Component {

    render() {

        return (
            <div className="hero is-fullheight is-grey">
                <div className="container margin-top-lg margin-bottom-lg">
                    <SoundCloudWidget id="ot18-iframe"/>
                </div>
            </div>
        );
    }
}

export default PodcastPageContainer;