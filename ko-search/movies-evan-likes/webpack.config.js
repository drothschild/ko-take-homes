const path = require('path')
const baseDir = path.resolve(__dirname)
const buildDir = path.join(baseDir, './build')
const assetsDir = path.join(buildDir, './assets')

module.exports = {
  context: baseDir,
  API_KEY: '36ff4bcc',
  entry: './src/main.jsx',
  output: {
    path: assetsDir,
    filename: 'bundle.js',
    publicPath: '/'
  },
  presets: [
    'react',
    'env',
    {
      targets: {
        browsers: 'last version'
      }
    }
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader:
          'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['shared', 'node_modules']
  },
  devServer: {
    contentBase: buildDir,
    publicPath: '/assets/'
  }
}
