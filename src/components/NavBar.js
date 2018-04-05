import React, {Component} from "react";

class NavBar extends Component {

    render() {
        return (
            <div className="uk-position-top-left uk-margin-large-left">
                <nav
                    className="uk-navbar-container uk-navbar-transparent uk-light"
                    uk-navbar="true"
                >
                    <div className="uk-navbar-center">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active">
                                <a href="#">HOME</a>
                            </li>
                            <li>
                                <a href="#">
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

export default NavBar;