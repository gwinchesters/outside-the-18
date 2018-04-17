import "whatwg-fetch";

import {
    statusHandler,
    jsonHandler,
    buildRequestObject
} from "src/util/request";

import {getPosts} from "src/util/tumblr";

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
        const options = {};
        if (limit) {
            options.limit = limit;
        }
        
        const url = getPosts(options);
        const requestObject = buildRequestObject();

        dispatch(writeGetPostsRequest());

        fetch(url, requestObject)
            .then(statusHandler)
            .then(jsonHandler)
            .then((json) => {

                dispatch(writeGetPostsSuccess(json.response.posts));
            });
    };
}
