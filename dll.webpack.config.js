// 解决webpack打包慢的问题
const webpack = require('webpack');
const path = require('path');

const vendors = [
  'react',
  'react-dom',
  'react-router'
];

module.exports = {

  entry: {
	vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
	path: path.resolve(__dirname, "build"),
	filename: "[name].dll.js",
	library: '[name]'
  },
  plugins: [
	new webpack.DllPlugin({
	  path: path.resolve(__dirname, 'build', 'manifest.json'),
	  name: '[name]',
	  context: __dirname
	})
  ]
};
