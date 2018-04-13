import {
    BLOG_ID,
    CONSUMER_KEY
} from "src/util/constants";

const base = "https://api.tumblr.com/v2/blog/" + BLOG_ID;
const key = "?api_key=" + CONSUMER_KEY;

export function getPosts(options) {
    let path = "/posts";
    let params = "";

    for (const option in options) {
        if (option == "type") {
            path = "/" + options[option];
        } else {
            params += "&" + option + "=" + options[option];
        }
    }

    return base + path + key + params;
}