'use strict';
const path = require('path');
const SpritePlugin = require('webpack-spritesmith');

const plugins = [
  new SpritePlugin({
    src: {
      cwd: path.resolve(__dirname, 'client/styles/icons'),
      glob: '*.png'
    },
    target: {
      image: path.resolve(__dirname, 'client/assets/images/sprite.png'),
      css: path.resolve(__dirname, 'client/styles/_sprite.scss')
    },
    apiOptions: {
      cssImageRef: "client\/assets\/images\/sprite.png",
      generateSpriteName: function (sprite) {
        return 'icon-' + path.basename(sprite, '.png');
      }
    }
  })
];

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {'doNotTouch': './doNotTouch.ts'},

  output: {
    path: __dirname,
    filename: '[name].js'
  },

  plugins: plugins,

  module: {
    rules: []
  }
};
