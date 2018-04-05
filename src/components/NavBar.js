import React, {Component} from "react";
import {Link} from "react-router-dom";

import {
    HOME_NAV,
    EPISODES_NAV
} from "src/util/constants";

class NavBar extends Component {

    constructor() {
        super();

        this.state = {
            activeNav: HOME_NAV
        };
    }

    render() {
        const homeNavClass = this.state.activeNav === HOME_NAV ? "uk-active" : "";
        const episodesNavClass = this.state.activeNav === EPISODES_NAV ? "uk-active" : "";
        return (
            <div className="uk-position-top-left uk-margin-large-left">
                <nav
                    className="uk-navbar-container uk-navbar-transparent uk-light"
                    uk-navbar="true"
                >
                    <div className="uk-navbar-center">
                        <ul className="uk-navbar-nav">
                            <li className={homeNavClass}>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        this.setState({
                                            activeNav: HOME_NAV
                                        });
                                    }}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className={episodesNavClass}>
                                <Link
                                    to="/episodes"
                                    onClick={() => {
                                        this.setState({
                                            activeNav: EPISODES_NAV
                                        });
                                    }}
                                >
                                    EPISODES
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;