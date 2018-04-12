import React, {Component} from "react";
import PropTypes from "prop-types";

import NavBar from "src/components/main/Navbar";

class MainHeaderContainer extends Component {

    render() {
        return (
            <NavBar
                activeContent={this.props.activeContent}
            />
        );
    }
}

MainHeaderContainer.propTypes = {
    activeContent: PropTypes.string
};

export default MainHeaderContainer;