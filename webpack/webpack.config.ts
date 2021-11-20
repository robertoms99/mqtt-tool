import { Configuration } from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { merge } from 'webpack-merge'
import devConfig from './webpack.dev'
import prodConfig from './webpack.prod'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCSSExtractPlugin from 'mini-css-extract-plugin'
// import { resolveEntryFilePath } from './lib/util'

const commonConfig: Configuration = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new TsconfigPathsPlugin() as any,
    new MiniCSSExtractPlugin()
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../public/index.html'),
    filename: 'js/bundle.[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', 'jsx', '.js']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}

export default (_: any, { mode }: any) => {
  switch (mode) {
    case 'development':
      return merge(commonConfig, devConfig as any)
    case 'production':
      return merge(commonConfig, prodConfig)
    default:
      throw new Error('No matching configuration was found {development | production}!')
  }
}
