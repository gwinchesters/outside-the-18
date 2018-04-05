import React, {Component} from "react";
import PropTypes from "prop-types";
import ScriptLoader from "react-script-loader-hoc";
import {
    SOUNDCLOUD_API_URL,
    SOUNDCLOUD_PLAYER_URL,
    OT18_SOUNDCLOUD_URL
} from "src/util/constants";

class SoundCloudWidget extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: props.scriptsLoadedSuccessfully
        };
    }

    componentWillReceiveProps(nextProps) {
        const newScriptStatus = nextProps.scriptsLoadedSuccessfully;

        if (newScriptStatus) {
            window.SC.Widget(nextProps.id);
            this.setState({
                isLoaded: newScriptStatus
            });
        }
    }

    render() {
        const id = this.props.id;
        const loading = this.state.isLoaded;
        const soundCloudSrc = SOUNDCLOUD_PLAYER_URL + OT18_SOUNDCLOUD_URL;

        return (
            <div>
                {loading &&
                <div uk-spinner="ratio: 3"/>
                }
                <iframe
                    id={id}
                    width="75%"
                    height="500"
                    scrolling="no"
                    frameBorder="no"
                    src={soundCloudSrc}
                />
            </div>
        );
    }
}

SoundCloudWidget.propTypes = {
    scriptsLoadedSuccessfully: PropTypes.bool,
    id: PropTypes.string.isRequired
};

export default ScriptLoader(SOUNDCLOUD_API_URL)(SoundCloudWidget);