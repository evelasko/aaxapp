module.exports = function (api) {
    api.cache(true);
    const presets = [
              "@babel/preset-env",
              "@babel/preset-flow",
              "@babel/preset-react",
              "@babel/typescript"
            ];
    const plugins = [ 
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "optional-require",
        "react-hot-loader/babel",
        "react-native-web"
     ];
  
    return {
      presets,
      plugins
    };
  }
