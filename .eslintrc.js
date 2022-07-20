// This enables ESLint to use dependencies of this config
// (see https://github.com/eslint/eslint/issues/3458)
require('eslint-config-toc/setupPlugins');

module.exports = {
  // Add configs based on your needs
  extends: ['toc/react-native'],
};
