import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Immutable from "immutable";

import SoundCloudWidget from "src/components/main/SoundCloudWidget";
import BlogPostGrid from "src/components/main/BlogPostGrid";

import {writeGetPosts} from "src/actions/blog";
import {PODCAST} from "src/util/constants";

class MainBodyContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {
            posts,
            blog,
            dispatch
        } = this.props;

        const isFetching = blog.get("isFetching");

        if (posts.size === 0 || !isFetching) {
            dispatch(writeGetPosts(3));
        }        
    }

    render() {
        const {
            activeContent,
            blog,
            posts
        } = this.props;
        let content = null;
        const isFetching = blog.get("isFetching");
        const error = blog.get("error");
        if (activeContent === PODCAST) {
            content = 
                <div className="margin-top-lg">
                    <SoundCloudWidget id="ot18-iframe"/>
                </div>;
        } else {
            content = 
                <BlogPostGrid
                    isFetching={isFetching}
                    error={error}
                    posts={posts}
                />;
        }
        return (
            <div className="container margin-bottom-lg">
                {content}
            </div>
        );
    }
}

MainBodyContainer.propTypes = {
    activeContent: PropTypes.string,
    blog: PropTypes.instanceOf(Immutable.Map),
    posts: PropTypes.instanceOf(Immutable.List),
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    return {
        blog: state.blog,
        posts: state.blog.get("posts")
    };
}


export default connect(mapStateToProps)(MainBodyContainer);