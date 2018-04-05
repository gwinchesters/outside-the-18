import React, {Component} from "react";
import PropTypes from "prop-types";

class Image extends Component {

    render() {
        const {
            id,
            classVal,
            width,
            height,
            imgSrc
        } = this.props;

        return (
            <img
                id={id}
                className={classVal}
                width={width}
                height={height}
                src={imgSrc}
            />
        );

    }
}

Image.propTypes = {
    id: PropTypes.string,
    classVal: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    imgSrc: PropTypes.string.isRequired
};

Image.defaultProps = {
    width: "",
    height: ""
};

export default Image;