/**
 * Handles the repsonse for HTTP requests.
 * @param  {Object} response A Stream object from the fetch() request
 * @return {Object}          A fulfilled or rejected Promise based status
 */
export function statusHandler(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }

    return Promise.reject(new Error(response));
}

/**
 * Simple wrapper to call the json() method on a Stream object
 * @param  {Object} response A stream object from fetch;
 * @return {Object}          A Promise that resolves with a JSON object
 */
export function jsonHandler(response) {
    return response.json();
}

/**
 * Helper function used to build a request object passed to fetch()
 * @param  {String} method The type of request to make GET, POST, PUT, DELETE
 * @param  {Object} body   Optional content to include as stringified JSON
 * in the request body
 * @param  {Boolean} isMultiPartForm True if request body should be for a
 * multipart form
 * @return {Object}
 */
export function buildRequestObject(method, body) {
    const requestObject = {
        method: method || "GET"
    };

    if (body) {
        requestObject.body = JSON.stringify(body);
    }

    return requestObject;
}

