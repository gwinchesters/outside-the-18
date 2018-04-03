/*
    babel-register will handnle transpiling files on the fly, which is what we
    want for tests.
    NOTE: There are other configuration details specified in src/.babelrc
    Generally there is an expectation that files in node_modules are
    transpiled ahead of time. In the case of red3, we ned to handle transpiling
    when the tests are run.
 */
require("babel-register")({
    // Ignore everything in node_modules except node_modules/red3.
    ignore: /node_modules/
});
// required for things like Object.values
require("babel-polyfill");
