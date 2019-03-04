// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      'react-native-svg$': 'react-native-web-svg',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
      'react-native-maps': 'react-native-web-maps'
    },
    extensions: ['.ts', '.tsx', 'web.js', '.js', '.web.ts', '.ts', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react-native'],
            plugins: ['react-native-web']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(tsx?$|web\.tsx?$)/,
        use: [
          'awesome-typescript-loader',
          {loader: 'babel-loader', options: {
            presets: ['react-native'],
            plugins: ['react-native-web']
          } }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({template: 'index.html.ejs',}),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};
