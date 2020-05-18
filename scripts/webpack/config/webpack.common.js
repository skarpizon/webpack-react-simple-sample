import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin } from 'webpack';

import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from '../constants';

export default () => {
  const { NODE_ENV } = process.env;
  // const IS_DEV = NODE_ENV === 'development';

  return {
    mode: 'none',
    entry: SOURCE_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: 'js/[name].[chunkhash].[id].js',
      chunkFilename: 'js/[name].[chunkhash].[id].js',
      hashDigestLength: 6,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        automaticNameDelimiter: '.',
      },
      runtimeChunk: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // query: {compact: false}
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[hash:6].[ext]',
              },
            },
          ],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './static/index.html',
        title: 'Изучаем вебпак!',
        favicon: './static/favicon.ico'
      }),
      new DefinePlugin({
        __ENV__: JSON.stringify(NODE_ENV),
        __DEV__: NODE_ENV === 'development',
        __PROD__: NODE_ENV === 'production',
      }),
    ],
  }
}