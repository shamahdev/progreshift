const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
      { 
        test: /\.png$/, 
        loader: "file-loader" 
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Progreshift',
      short_name: 'Progreshift',
      description: `Let's Progress and Reshift`,
      theme_color: '#FFBA69',
      background_color: '#FFBA69',
      start_url: '/index.html',
      display: 'standalone',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/icons/logo.png'),
          sizes: [96, 120, 128, 152, 167, 180, 192, 256, 384, 512, 1024],
          type: 'image/png',
          purpose: 'any maskable',
          destination: 'icons',
          ios: true,
        },
      ],
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
    }),
  ],
};
