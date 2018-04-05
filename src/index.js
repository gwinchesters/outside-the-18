import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import App from "src/components/App";
import store from "src/store";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
