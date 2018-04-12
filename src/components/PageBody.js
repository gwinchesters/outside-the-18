import React, {Component} from "react";
import PropTypes from "prop-types";

class PageBody extends Component {

    render() {

        return (
            <div className="hero is-fullheight is-grey">
                {this.props.children}
            </div>
        );
    }
}

PageBody.propTypes = {
    children: PropTypes.object
};

export default PageBody;
