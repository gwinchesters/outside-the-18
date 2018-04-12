import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SoundCloudWidget from "src/components/main/SoundCloudWidget";

import {getBlogPosts} from "src/actions/blog";

import {PODCAST} from "src/util/constants";

class MainBodyContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            activeContent,
            dispatch
        } = this.props;
    
        if (!activeContent || activeContent !== "") {
            dispatch(getBlogPosts(5));
        }
    }

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
    activeContent: PropTypes.string,
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    return {
        blog: state.blog,
        posts: state.blog.get("posts")
    };
}


export default connect(mapStateToProps)(MainBodyContainer);