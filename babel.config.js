module.exports = function webpackSetup() {
  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [];
  return {
    presets,
    plugins,
  };
};
