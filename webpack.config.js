const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/root.js',
  output: {
  	filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
      	test:/\.scss$/,
      	include: /src/,
      	loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: "css-loader!sass-loader" })
      }
    ]
  },
  plugins: [
       
        new ExtractTextPlugin({ filename: 'src/css/style.css', disable: false, allChunks: true })
    ]
};
