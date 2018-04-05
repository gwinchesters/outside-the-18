const webpack = require("webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const NameAllModulesPlugin = require("name-all-modules-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");
const PROD = process.env.NODE_ENV === "PROD";

let plugins = [
    // Don't bail on webpack internal errors
    new webpack.NoEmitOnErrorsPlugin(),
    // Creates feature flags for use in JS
    new webpack.DefinePlugin({
        __DEV__: JSON.stringify(
            JSON.parse(process.env.NODE_ENV === "DEV")
        )
    }),
    // Legacy modules (bootstrap in this case) rely on the presence of
    // specific modules (jQuery). This prepends var $ = require("jquery")
    // anytime it encounters the global $ identifier. I am also importing
    // the dropdown JS as well. I am using the ProvidePlugin function
    // because it doesn't require you to use a an import for either jquery
    // or dropdown. This is important when testing as mocha uses babel to
    // compile the modules and becuase jquery and dropdown are not modules
    // Bable doesn't know how to handle them
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor", "manifest"],
        minChunks: Infinity
    }),
    // The "runtime" chunk extracts the webpack runtime into it's own chunk.
    // If we only had vendor and manifest, the manifest chunk would extract
    // the runtime directly into index.html.  This extracts it into it's own
    // cachable file, slightly reducing network traffic.
    new webpack.optimize.CommonsChunkPlugin({
        names: ["runtime"]
    }),

    // generates a manifest.json file in ./dist/ that contains a mapping of all
    // source file names to their corresponding output file. Without this plugin
    // the manifest is inlined in the bundle and could change even if the source
    // files themselves do not, hence invalidating the cache
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
        template: "index.ejs",
        chunksSortMode: "dependency"
    }),

    new FaviconsWebpackPlugin("./resources/img/ot18Logo.png"),

    new ExtractTextPlugin({
        filename: "dist/[name].bundle.css",
        allChunks: true,
    }),
    new CopyWebpackPlugin([
        {
            from: "./resources/img/ot18Logo.png",
            to: "dist/img"
        }
    ]),
    // plugin to aid in inlining the manifest.json file in the generated
    // index.html file
    new InlineManifestWebpackPlugin({
        name: "webpackManifest"
    }),
    // This plugin cleans up extranious files leftover from old builds so that
    // we don't have builds polluted with many useless files.  To exclude files
    // add "exclude: ['fileName']" as an option.
    new WebpackCleanupPlugin()
];

if (PROD) {
    plugins = plugins.concat([
        // tells webpack to use the production node environment and enables
        // some additonal optimizations when building for PROD
        /* eslint-disable quote-props */
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),

        /* eslint-enable quote-props */
        // This plugin minifies all the JavaScript code of the final bundle
        new webpack.optimize.UglifyJsPlugin(),

        // The next three plugins are for setting up stuff related to long term
        // caching so that we don't have problems with our hashs.
        // This modules gives chunks a unique name, rather than incrimented
        // numerical id.  In the case of a chunk that doesn't have a name, such
        // as an async loaded dependency, this will generate a name for the
        // chunk from the path.
        new webpack.NamedChunksPlugin((chunk) => {
            if (chunk.name) {
                return chunk.name;
            }
            return chunk.modules.map((m) => {
                return path.relative(m.context, m.request);
            }).join("_");
        }),
        // This does basically the same thing as the above plugin, except for
        // modules instead of chunks.  It does have issues with external
        // modules, but that's what NameAllModulesPlugin solves.
        new webpack.NamedModulesPlugin(),
        new NameAllModulesPlugin(),

        // Enables gzip compression of our HTML, CSS, and JS files in production
        // The creates a signficantly smaller bundle and file size
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]);
}

if (!PROD) {
    plugins = plugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ]);
}

module.exports = {
    // Use cheap-module-source-map when in PROD as it greatly reduces the
    // source map size
    devtool: PROD ? false : "cheap-source-map",
    entry: {
        vendor: [
            "babel-polyfill",
            "es6-promise",
            "history",
            "immutable",
            "react",
            "react-dom",
            "react-router",
            "whatwg-fetch"
        ],
        app: PROD ? [
            "./src/index"
        ]
            : [
                "webpack-dev-server/client?http://localhost:3000",
                "webpack/hot/only-dev-server",
                "./src/index"
            ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        // When in PROD, use chunkhash to add a content dependent
        // cache-buster hash to each file
        filename: PROD ? "[name].[chunkhash].js" : "[name].js",
        chunkFilename: PROD ? "[name].[chunkhash].js" : "[name].js"
    },
    plugins: plugins,
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: PROD ? [
                    "babel-loader"
                ] : [
                    "babel-loader"
                ],
                include: [
                    path.join(__dirname, "src")
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /.(ttf|otf|eot|svg|ico|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                }]
            },
            {
                test: /\.(png|jpg|ico)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src"),
            resources: path.resolve(__dirname, "resources"),
            styles: path.resolve(__dirname, "styles"),
            test: path.resolve(__dirname, "test")
        },
        modules: [
            "node_modules"
        ],
        extensions: [
            ".js",
            ".jsx",
            ".css"
        ]
    }
};
