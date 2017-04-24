import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,//debugインフォメーション生成
  devtool: 'inline-source-map', //devtoolの種類設定
  noInfo: false,//コンソールログ情報設定
  entry: [//エキスポート
    'eventsource-polyfill', // necessary for hot reloading with IE //IEでのホットリロードに必要
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.//ホットモジュールのリロードが失敗した場合は、ページをリロードすることに注意してください。
    path.resolve(__dirname, 'src/index') //読み込むファイルの場所
  ],
  target: 'web',//ブラウザのこと
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.//物理ファイルは、実動ビルドタスク `npm run build`によってのみ出力されます。
    publicPath: '/',
    filename: 'bundle.js' //書き出すファイルの場所
  },
  devServer: { //監視先フォルダの場所。ソースファイルを監視し、バンドルが変更されるたびにバンドルを再コンパイルします。
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //node.js APIによるホットモジュールの置き換え//webpack-dev-serverでホットモジュールの交換を有効にするに--hotは、コマンドラインで指定します。これにより、HotModuleReplacementPluginwebpackの設定が追加されます。
    new webpack.NoErrorsPlugin()//
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'tools/shared')
      ],loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};
