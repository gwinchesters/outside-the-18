import React, {Component} from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

class BlogPostPreview extends Component {

    render() {
        const {
            isFetching,
            error,
            posts
        } = this.props;

        return (
            <div>
                {isFetching && !error &&
                    <p>Loading</p>
                }
                {!isFetching &&
                    posts.get(0).get("title")
                }
            </div>
        );
    }
}

BlogPostPreview.propTypes = {
    isFetching: PropTypes.bool,
    error: PropTypes.bool,
    posts: PropTypes.instanceOf(Immutable.List)
};

export default BlogPostPreview;