import React, {Component} from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

class BlogPost extends Component {

    render() {
        const post = this.props.post;
        const title = post.get("title");
        const body = post.get("body");
        const cardStyle = {
            maxHeight: "400px",
            overflow: "hidden",
        };

        return (
            <div
                style={cardStyle}
                className="card"
            >
                <header className="card-header">
                    <p className="card-header-title">
                        {title}
                    </p>
                </header>
                <div
                    
                    className="card-content"
                >
                    <p dangerouslySetInnerHTML={{__html: body}}/>
                </div>
            </div>
        );

    }
}

BlogPost.propTypes = {
    post: PropTypes.instanceOf(Immutable.Map)
};

export default BlogPost;