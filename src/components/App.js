import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {hot} from "react-hot-loader";

import MainPageContainer from "src/containers/MainPageContainer";
import AdminPageContainer from "src/containers/AdminPageContainer";

require("styles/base.scss");


class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <Route 
                        exact
                        path="/"
                        component={MainPageContainer}
                    />
                    <Route
                        exact
                        path="/admin"
                        component={AdminPageContainer}
                    />
                </div>
            </Router>
        );
    }
}

export default hot(module)(App);
