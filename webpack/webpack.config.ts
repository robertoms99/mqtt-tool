import { Configuration } from 'webpack'
import wmerge from 'webpack-merge'
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
    new MiniCSSExtractPlugin()
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', 'jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      }
    ]
  }
}

export default (_: any, { mode }: any) => {
  console.log(mode)

  switch (mode) {
    case 'development':
      return wmerge(commonConfig, devConfig as any)
    case 'production':
      return wmerge(commonConfig, prodConfig)
    default:
      throw new Error('No matching configuration was found!')
  }
}
