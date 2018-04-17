import React, {Component} from "react";
import {Route} from "react-router-dom";

import HomePageContainer from "src/containers/HomePageContainer";
import PodcastPageContainer from "src/containers/PodcastPageContainer";
import BlogPageContainer from "src/containers/BlogPageContainer";

class Routes extends Component {

    render() {
        return (
            <div>
                <Route 
                    exact
                    path="/"
                    component={HomePageContainer}
                />
                <Route
                    path="/podcast"
                    component={PodcastPageContainer}
                />
                <Route
                    path="/blog/:blogId?"
                    component={BlogPageContainer}
                />
            </div>
        );
    }

}

export default Routes;