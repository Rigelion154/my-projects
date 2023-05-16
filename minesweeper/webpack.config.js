const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // mode: 'development', устанавливает дев мод по умолчанию. Используются скрипты отдельно для дев и прода
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'), // я так понял собирает из папки которую укажещь
    // },
    compress: true,
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   // test: /\.(gif|png|jpe?g|svg|xml|mp3)$/i,
      //   use: ['file-loader'],
      //   dependency: {not: ['url']},
      // },
      // {
      //   test: /\.(mp3|wav)$/i,
      //   type: "asset",
      //   generator: {
      //     filename: 'audio/[name][ext]'
      //   }
      // },
      {
        test: /\.(mp3?|wav|png|ogg|mpe?g)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[name][hash][ext]',
        },
      },
    ]
  }
};