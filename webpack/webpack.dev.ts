import path from 'path'

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: {
      index: path.resolve(__dirname, '../public/index.html')
    }
  }
}

export default devConfig
