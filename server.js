const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

new WebpackDevServer(webpack(config), {
    contentBase: "./dist",
    //hot: true,
    stats: {
        chunks: false,
        colors: true,
        modules: false
    }
}).listen(3000, "0.0.0.0", (err) => {
    if (err) {
        console.log(err); //eslint-disable-line no-console
    }
    console.log("Listening at localhost:3000"); //eslint-disable-line no-console
});
