import React, {Component} from "react";
import NavBar from "src/components/NavBar";
import SoundCloudWidget from "src/components/SoundCloudWidget";

class EpisodesPageContainer extends Component {

    render() {

        return (
            <div>
                <NavBar/>
                <div className="uk-position-center uk-margin-auto uk-width-3-5">
                    <SoundCloudWidget id="ot18-iframe"/>
                </div>
            </div>
        );
    }
}

export default EpisodesPageContainer;
