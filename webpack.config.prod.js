const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),

      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
        },

        components: {
          test: /[\\/]components[\\/]/,
          name: 'components',
          inforce: true,
          priority: 1,
          chunks: 'async ',
        },
      },

      chunks: 'all',
      name: 'my_chanks',
      automaticNameDelimitary: '-',
      minChunks: 2,
      minSize: 100,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
    },
  },
})
