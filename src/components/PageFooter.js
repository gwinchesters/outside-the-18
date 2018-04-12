import React, {Component} from "react";
import PropTypes from "prop-types";

class PageFooter extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    {this.props.children}
                </div>
            </footer>
        );
    }
}

PageFooter.propTypes = {
    children: PropTypes.object
};

export default PageFooter;