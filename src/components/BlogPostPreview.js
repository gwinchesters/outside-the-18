import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import Immutable from "immutable";

class BlogPostPreview extends Component {

    render() {
        const post = this.props.post;
        const title = post.get("title");
        const body = post.get("body");
        const linkPath = "/blog/" + post.get("id");

        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        <NavLink to={linkPath}>
                            {title}
                        </NavLink>
                    </p>
                </header>
                <div className="card-content blog-preview-body">
                    <div className="">
                        <p dangerouslySetInnerHTML={{__html: body}}/>
                        <div className="fadeout"/>
                    </div>
                </div>
            </div>
        );

    }
}

BlogPostPreview.propTypes = {
    post: PropTypes.instanceOf(Immutable.Map)
};

export default BlogPostPreview;