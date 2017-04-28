import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import colors from 'colors';

import users from './routes/usersServer';
import acth from './routes/acthServer';
import workshopevent from './routes/workshopeventServer';

import bodyParser from 'body-parser';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

console.log('starting srcServer...'.white);
// reqパラメータをJSONで取得
app.use(bodyParser.json());
//reqを受け付けし担当するとサーバへー引き継ぐ
app.use('/api/users', users); //expressでserverg立ち上げ
app.use('/api/acth', acth); //expressでserverg立ち上げ
app.use('/api/workshopevent', workshopevent); //expressでserverg立ち上げ

//指定されたマウントミドルウェア指定されたパスに関数や機能を：要求されたパスのベースが一致したときに、ミドルウェア機能が実行されますpath。
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//ファイルをオクテットストリームとして送信します。
// express起動でsendFileする
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});
// sendしたファイルをopenする
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
