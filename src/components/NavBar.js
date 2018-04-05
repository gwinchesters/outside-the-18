import React, {Component} from "react";
import PropTypes from "prop-types";

import {
    writeUpdateActiveNav
} from "src/actions/main";

import {
    HOME_NAV,
    EPISODES_NAV
} from "src/util/constants";

class NavBar extends Component {

    render() {
        const {
            activeNav,
            dispatch
        } = this.props;
        const activeNavHome = activeNav === HOME_NAV;
        const activeNavEmpty = activeNav === "";
        const homeNavClass = (activeNavHome || activeNavEmpty) ? "uk-active" : "";
        const episodesNavClass = activeNav === EPISODES_NAV ? "uk-active" : "";
        

        return (
            <div className="uk-position-top-left uk-margin-large-left">
                <nav
                    className="uk-navbar-container uk-navbar-transparent uk-light"
                    uk-navbar="true"
                >
                    <div className="uk-navbar-center">
                        <ul className="uk-navbar-nav">
                            <li className={homeNavClass}>
                                <a
                                    href=""
                                    onClick={(event) => {
                                        event.preventDefault();
                                        dispatch(
                                            writeUpdateActiveNav(HOME_NAV)
                                        );
                                    }}
                                >
                                    HOME
                                </a>
                            </li>
                            <li className={episodesNavClass}>
                                <a
                                    href=""
                                    onClick={(event) => {
                                        event.preventDefault();
                                        dispatch(
                                            writeUpdateActiveNav(EPISODES_NAV)
                                        );
                                    }}
                                >
                                    EPISODES
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

NavBar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    activeNav: PropTypes.string
};

export default NavBar;