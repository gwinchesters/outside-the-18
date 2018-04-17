import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Immutable from "immutable";

import BlogPostGrid from "src/components/BlogPostGrid";

import {writeGetPosts} from "src/actions/blog";

class HomePageContainer extends Component { 

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

        if (posts.size === 0 && !isFetching) {
            dispatch(writeGetPosts());
        }        
    }

    render() {
        const {
            posts
        } = this.props;

        return (
            <div className="hero is-fullheight is-grey">
                <div className="container margin-bottom-lg">
                    <BlogPostGrid
                        limit={3}
                        posts={posts}
                    />
                </div>
            </div>
        );
    }
}

HomePageContainer.propTypes = {
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

export default connect(mapStateToProps)(HomePageContainer);