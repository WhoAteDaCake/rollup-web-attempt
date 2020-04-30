const dev = {
  presets: ['@babel/preset-react'],
  plugins: ['react-hot-loader/babel'],
};

const prod = {
  // plugins: ['lodash'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          ie: 11,
        },
      },
    ],
    '@babel/preset-react',
  ],
};


module.exports = process.env.NODE_ENV === 'development' ? dev : prod;