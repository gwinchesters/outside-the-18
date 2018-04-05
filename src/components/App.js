import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {hot} from "react-hot-loader";
import NavBar from "src/components/NavBar";
import HomePageContainer from "src/containers/HomePageContainer";
import EpisodesPageContainer from "src/containers/EpisodesPageContainer";

require("styles/base.scss");


class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <NavBar/>
                    <Route 
                        exact
                        path="/"
                        component={HomePageContainer}
                    />
                    <Route
                        path="/episodes"
                        component={EpisodesPageContainer}
                    />
                </div>
            </Router>
        );
    }
}

export default hot(module)(App);
