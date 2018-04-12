import React, {Component} from "react";
import PropTypes from "prop-types";

class PageHeader extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

PageHeader.propTypes = {
    children: PropTypes.object
};

export default PageHeader;