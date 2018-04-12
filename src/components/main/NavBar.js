import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import logoSrc from "resources/img/ot18Logo.png";

import {
    PODCAST,
    BLOG
} from "src/util/constants";

class NavBar extends Component {

    render() {
        const {
            activeContent
        } = this.props;
        const podcastClass = activeContent === PODCAST ? " is-active" : "";
        const blogClass = activeContent === BLOG ? " is-active" : "";
        

        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src={logoSrc}/>
                    </a>

                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link
                            className={"navbar-item" + podcastClass}
                            to="/podcast"
                        >
                            PODCAST
                        </Link>
                        <Link
                            className={"navbar-item" + blogClass}
                            to="/blog"
                        >
                            BLOG
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    activeContent: PropTypes.string
};

export default NavBar;