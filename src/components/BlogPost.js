import React, {Component} from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";

class BlogPost extends Component {

    render() {
        const post = this.props.post;
        const title = post.get("title");
        const body = post.get("body");

        return (
            <div className="columns">
                <div className="column is-two-fifths box margin-top-lg center">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                {title}
                            </p>
                        </header>
                        <div className="card-content">
                            <p dangerouslySetInnerHTML={{__html: body}}/>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

BlogPost.propTypes = {
    post: PropTypes.instanceOf(Immutable.Map)
};

export default BlogPost;