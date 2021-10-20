const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

const getSrcPath = (filePath) => {
  const src = path.resolve(__dirname, 'src');
  return path.posix.join(src.replace(/\\/g, '/'), filePath);
};

module.exports = (env) => {
  const isProductionMode = env.mode === 'production';

  return {
    target: 'node',
    mode: isProductionMode ? 'production' : 'development',
    context: __dirname,
    entry: getSrcPath('/index.js'),
    stats: { errorDetails: !isProductionMode },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
      extensions: ['.js'],
    },
    optimization: {
      minimize: false,
    },
    performance: {
      hints: false,
    },
    watchOptions: {
      ignored: ['**/dist', '**/node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
              ],
              plugins: [
                [
                  '@babel/plugin-proposal-object-rest-spread',
                  { loose: true, useBuiltIns: true },
                ],
              ],
            },
          },
        },
      ],
    },
    plugins: [new ESLintPlugin(), new webpack.ProgressPlugin()],
  };
};
