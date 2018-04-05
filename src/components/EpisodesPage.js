import React, {Component} from "react";
import SoundCloudWidget from "src/components/SoundCloudWidget";

class EpisodesPage extends Component {

    render() {

        return (
            <div>
                <div className="uk-position-center uk-margin-auto uk-width-3-5">
                    <SoundCloudWidget id="ot18-iframe"/>
                </div>
            </div>
        );
    }
}

export default EpisodesPage;