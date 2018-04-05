import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleWare from "redux-thunk";

import rootReducer from "src/reducers/index";


const finalCreateStore = compose(
    applyMiddleware(
        // lets us dispatch() functions
        thunkMiddleWare
    ),
    // Enable Chrome devtools extension if it's available
    window.devToolsExtension ?
        window.devToolsExtension() :
        (f) => {
            return f;
        }
)(createStore);


const store = finalCreateStore(rootReducer);

export default store;
