import React, {Component} from "react";
import PropTypes from "prop-types";

import PageHeader from "src/components/PageHeader";
import PageBody from "src/components/PageBody";
import PageFooter from "src/components/PageFooter";

import MainHeaderContainer from "src/containers/main/MainHeaderContainer";
import MainBodyContainer from "src/containers/main/MainBodyContainer";
import MainFooterContainer from "src/containers/main/MainFooterContainer";

class MainPage extends Component {

    render() {
        const {
            match
        } = this.props;
        const activeContent = match.params.page;

        return (
            <div>
                <PageHeader>
                    <MainHeaderContainer activeContent={activeContent}/>
                </PageHeader>
                <PageBody>
                    <MainBodyContainer activeContent={activeContent}/>
                </PageBody>
                <PageFooter>
                    <MainFooterContainer/>
                </PageFooter>
            </div>
        );
    }
}

MainPage.propTypes = {
    match: PropTypes.object
};

export default MainPage;