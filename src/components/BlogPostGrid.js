import React, {Component} from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

import BlogPostPreview from "src/components/BlogPostPreview";

class BlogPostGrid extends Component {

    render() {
        const {
            posts,
            limit
        } = this.props;
        const postList = posts.slice(0,limit);

        return (
            <div className="columns">
                {postList.map((post) => {
                    return (
                        <div
                            key={post.get("id")}
                            className="column margin-top-lg"
                        >
                            <BlogPostPreview post={post} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

BlogPostGrid.propTypes = {
    posts: PropTypes.instanceOf(Immutable.List),
    limit: PropTypes.number
};

export default BlogPostGrid;