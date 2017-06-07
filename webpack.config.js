// webpack.config.js
const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{

      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },

    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',

  
          //presets: [
            //['es2015', { modules: false }]
         // ]
        }
      ]
    
  }
}
// // webpack.config.js
// rules: [{
//   test: /\.scss$/,
//   use: [
//     'style-loader',
//     'css-loader',
//     'sass-loader'
//   ]
// }, {
//   // ...
// }]

module.exports = config