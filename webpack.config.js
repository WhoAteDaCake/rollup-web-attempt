const path = require('path');

module.exports = {
  entry: './public/bundle.js',
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'public'),
  },
};