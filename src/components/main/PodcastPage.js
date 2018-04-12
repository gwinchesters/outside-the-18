import React, {Component} from "react";
import SoundCloudWidget from "src/components/main/SoundCloudWidget";

class PodcastPage extends Component {

    render() {
        return (
            <div className="container box margin-top-lg">
                <SoundCloudWidget id="ot18-iframe"/>
            </div>
        );
    }
}

export default PodcastPage;