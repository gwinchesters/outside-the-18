import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {hot} from "react-hot-loader";

import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
fontawesome.library.add(brands);

import "styles/base.scss";

import NavBar from "src/components/Navbar";
import Routes from "src/components/Routes";
import Footer from "src/components/Footer";

class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <NavBar/>
                    <Routes/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default hot(module)(App);
