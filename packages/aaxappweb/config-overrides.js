// config-overrides.js
const {
    addWebpackAlias,
    babelInclude,
    fixBabelImports,
    addBabelPlugins,
    override,
    useBabelRc,
    disableEsLint
  } = require('customize-cra')
  
  const path = require('path')
  
  module.exports = override(
    disableEsLint(),
    useBabelRc(),
    ...addBabelPlugins(
      "@babel/plugin-proposal-class-properties"
    ),
    fixBabelImports('module-resolver', {
      alias: {
        '^react-native$': 'react-native-web',
      },
    }),
    addWebpackAlias({
      'react-native': 'react-native-web',
      'react-native-svg$': 'react-native-web-svg',
      'react-native-linear-gradient': 'react-native-web-linear-gradient'
    }),
    babelInclude([
      path.resolve('src'), // make sure you link your own source
      path.resolve('node_modules/react-native-vector-icons'),
    //   path.resolve('node_modules/react-native-web-linear-gradient'),
    //   path.resolve('node_modules/react-router-native'),
    ]),
  )