import path from 'path'

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '../public')
    }
  }
}

export default devConfig
