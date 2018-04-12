import {combineReducers} from "redux";
import main from "src/reducers/main";
import blog from "src/reducers/blog";

const rootReducer = combineReducers({
    main,
    blog
});

export default rootReducer;