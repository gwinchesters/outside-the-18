import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import logoSrc from "resources/img/ot18Logo.png";

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <NavLink
                        className="navbar-item"
                        to="/"
                    >
                        <img src={logoSrc}/>
                    </NavLink>
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
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/podcast"
                        >
                            PODCAST
                        </NavLink>
                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/blog"
                        >
                            BLOG
                        </NavLink>
                    </div>
                    <div className="navbar-end">
                        <a
                            className="navbar-item"
                            rel="noopener noreferrer"
                            href="https://twitter.com/OutsideThe18Pod"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={["fab", "twitter"]}/>
                        </a>
                        <a
                            className="navbar-item"
                            rel="noopener noreferrer"
                            href="http://www.facebook.com/OT18pod"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={["fab", "facebook-f"]}/>
                        </a>
                        <a
                            className="navbar-item"
                            rel="noopener noreferrer"
                            href="https://itunes.apple.com/us/podcast/outside-the-18/id996542298?mt=2"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={["fab", "itunes-note"]}/>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;