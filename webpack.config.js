const webpack = require('webpack')
const nodeENV = process.env.NODE_ENV || 'production'

module.exports = {
  devtool: 'source-map',

  entry: {
    filename: './js/app.js'
  },

  output: {
    filename: './js/build.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ["env", {
              "targets": {
                "browsers": ["last 2 versions", "safari >= 7"]
              },
              "modules": false
            }]
          ],
        },
      },
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
    })
  ]
}
