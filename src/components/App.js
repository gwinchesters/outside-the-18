import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {hot} from "react-hot-loader";

import MainPage from "src/components/main/MainPage";
import AdminPage from "src/components/admin/AdminPage";
import "styles/base.scss";


class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <Route 
                        exact
                        path="/"
                        component={MainPage}
                    />
                    <Route
                        exact
                        path="/admin"
                        component={AdminPage}
                    />
                    <Route
                        path="/:page"
                        component={MainPage}
                    />
                </div>
            </Router>
        );
    }
}

export default hot(module)(App);
