import Tumblr from "src/util/tumblrClient";
import {TUMBLR_BLOG_NAME} from "src/util/constants";

export const WRITE_GET_POSTS_REQUEST = "WRITE_GET_POSTS_REQUEST";
export const WRITE_GET_POSTS_SUCCESS = "WRITE_GET_POSTS_SUCCESS";
export const WRITE_GET_POSTS_ERROR = "WRITE_GET_POSTS_ERROR";

export function writeGetPostsRequest() {
    return {
        type: WRITE_GET_POSTS_REQUEST
    };
}

export function writeGetPostsSuccess(posts) {
    return {
        type: WRITE_GET_POSTS_SUCCESS,
        posts: posts
    };
}

export function writeGetPostsError() {
    return {
        type: WRITE_GET_POSTS_ERROR
    };
}

export function writeGetPosts(limit) {
    return (dispatch) => {
        dispatch(writeGetPostsRequest());

        const options = {
            limit: limit
        };

        Tumblr.blogPosts(TUMBLR_BLOG_NAME, options, (err, data) => {
            if (err) {
                dispatch(writeGetPostsError());
            } else {
                dispatch(writeGetPostsSuccess(data));
            }
        });
    };
}
