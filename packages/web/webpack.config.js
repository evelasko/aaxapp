const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'react-native$': 'react-native-web',
            'react-native-svg$': 'react-native-web-svg',
            'react-native-linear-gradient': 'react-native-web-linear-gradient',
            'react-native-maps': 'react-native-web-maps'
          },
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map",
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        ["module-resolver", {
            "alias": {
              "^react-native$": "react-native-web"
            }
          }],
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };