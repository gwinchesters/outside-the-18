import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import NavBar from "src/components/Navbar";
import LandingPage from "src/components/LandingPage";
import EpisodesPage from "src/components/EpisodesPage";

import {
    EPISODES_NAV
} from "src/util/constants";

class MainPageContainer extends Component {

    render() {
        const {
            activeNav,
            dispatch
        } = this.props;
        const homeActive = activeNav !== EPISODES_NAV ? true : false;

        return (
            <div>
                <NavBar
                    activeNav={activeNav}
                    dispatch={dispatch}
                />
                {homeActive ?
                    <LandingPage/> :
                    <EpisodesPage/>
                }
            </div>

        );
    }
}

MainPageContainer.propTypes = {
    activeNav: PropTypes.string,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        activeNav: state.main.get("activeNav")
    };
}

export default connect(mapStateToProps)(MainPageContainer);