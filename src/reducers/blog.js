import Immutable from "immutable";

import {
    WRITE_GET_POSTS_REQUEST,
    WRITE_GET_POSTS_SUCCESS,
    WRITE_GET_POSTS_ERROR
} from "src/actions/blog";

const initialState = Immutable.fromJS({
    posts: Immutable.fromJS([]),
    isFetching: false,
    error: false
});

function blogReducer(state = initialState, action) {
    switch (action.type) {
        case WRITE_GET_POSTS_REQUEST:
            return state.withMutations((newState) => {
                newState.set("isFetching", true);
            });
        case WRITE_GET_POSTS_SUCCESS:
            return state.withMutations((newState) => {
                newState
                    .set("isFetching", false)
                    .set("posts", action.posts);
            });
        case WRITE_GET_POSTS_ERROR:
            return state.withMutations((newState) => {
                newState
                    .set("isFetching", false)
                    .set("error", true);
            });
        default:
            return state;
    }

}

export default blogReducer;