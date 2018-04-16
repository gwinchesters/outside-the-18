import React, {Component} from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

import BlogPost from "src/components/main/BlogPost";

class BlogPostGrid extends Component {

    render() {
        const {
            posts
        } = this.props;

        return (
            <div className="columns">
                {posts.map((post) => {
                    return (
                        <div
                            key={post.get("id")}
                            className="column margin-top-lg"
                        >
                            <BlogPost post={post} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

BlogPostGrid.propTypes = {
    posts: PropTypes.instanceOf(Immutable.List)
};

export default BlogPostGrid;