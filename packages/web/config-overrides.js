// config-overrides.js
const {
    addWebpackAlias,
    babelInclude,
    fixBabelImports,
    addBabelPlugins,
    addWebpackResolve,
    addBabelPresets,
    override,
    disableEsLint
  } = require('customize-cra')
  
  const path = require('path')
  
  module.exports = override(
    disableEsLint(),
    ...addBabelPresets(
      ["@babel/preset-flow"]
    ),
    ...addBabelPlugins(
      "@babel/plugin-proposal-class-properties",
      "optional-require"
    ),
    fixBabelImports('module-resolver', {
      alias: {
        '^react-native$': 'react-native-web',
      },
    }),
    addWebpackAlias({
      'react-native': 'react-native-web',
      'react-native-svg$': 'react-native-web-svg',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
      'react-native-maps': 'react-native-web-maps',
    }), 
    babelInclude([
      path.resolve('src'), // make sure you link your own source
      // path.resolve('node_modules/react-native-vector-icons'),
      // path.resolve('node_modules/react-native-paper'),
      /node_modules\/react-native-/,
    //   path.resolve('node_modules/react-router-native'),
    ]),
  )
