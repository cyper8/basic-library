const webpack = require("webpack");
const path = require('path');
const env = process.env.NODE_ENV;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const srcRoot = path.resolve(__dirname,"src");

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER:  JSON.stringify(true),
      NODE_ENV: JSON.stringify(env || 'development'),
      C9_SH_EXECUTED: JSON.stringify(process.env.C9_SH_EXECUTED || 0)
    }
  }),
  new webpack.LoaderOptionsPlugin({
    debug: env !== 'production'
  }),
  new ExtractTextPlugin({
    filename: 'basic.css'
  })
];

module.exports = {
  context: srcRoot,
  entry:["index.js"],
  //devtool: 'inline-source-map',
  plugins: plugins,
  output: {
    path: `${__dirname}/dist`,
    library: 'Basic',
    libraryTarget: 'var',
    filename: env === "production" ? "basic-library.min.js" : "basic-library.js"
  },
  resolve:{
    modules: ["node_modules",".",srcRoot],
    alias: {
      Basic: srcRoot
    },
    extensions: ["*",".js",".css"]
  },
  module:{
    rules: [
      {
        test: /\.js/,
        //exclude: [/node_modules/],
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [ 'css-loader' ]
          })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
}
