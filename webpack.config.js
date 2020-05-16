module.exports = {
  node: {
    // without this, @babel/preset-typescript throws error about 'fs'
    // https://github.com/webpack-contrib/css-loader/issues/447
    fs: 'empty'
  }
};
