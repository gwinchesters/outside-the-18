import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Immutable from "immutable";

import BlogPostGrid from "src/components/BlogPostGrid";
import BlogPost from "src/components/BlogPost";

class BlogPageContainer extends Component {

    render() {
        const {
            match,
            posts
        } = this.props;
        let post;
        let singlePost = false;
        const blogId = match.params.blogId;
        if (blogId) {
            singlePost = true;
            post = posts.find((post) => {
                return post.get("id") == blogId;
            });
        }
        

        return (
            <div className="hero is-fullheight is-grey">
                <div className="container margin-bottom-lg">
                    {singlePost ?
                        <BlogPost post={post}/> :
                        <BlogPostGrid
                            limit={5}
                            posts={posts}
                        />
                    }
                </div>
            </div>
        );
    }
}

BlogPageContainer.propTypes = {
    match: PropTypes.object,
    posts: PropTypes.instanceOf(Immutable.List),
};

function mapStateToProps(state) {
    return {
        posts: state.blog.get("posts")
    };
}

export default connect(mapStateToProps)(BlogPageContainer);