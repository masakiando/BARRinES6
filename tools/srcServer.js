// packages
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import colors from 'colors';
import bodyParser from 'body-parser';
// build config
import config from '../webpack.config.dev';
// routes Module
import users from './routes/usersServer';
import acth from './routes/acthServer';
import workshopevent from './routes/workshopeventServer';
import games from './routes/gamesServer';
import starbucks from './routes/starbucksServer';
import players from './routes/playersServer';
import trips from './routes/tripServer';
import webgles from './routes/webglServer';
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

console.log('starting srcServer...'.white);
// reqパラメータをJSONで取得
app.use(bodyParser.json());

//routes reqを受け付けし担当するとサーバへー引き継ぐ
app.use('/api/users', users); //expressでserverg立ち上げ
app.use('/api/acth', acth); //expressでserverg立ち上げ
app.use('/api/workshopevent', workshopevent); //expressでserverg立ち上げ
app.use('/api/games', games);
app.use('/api/starbucks', starbucks);
app.use('/api/players', players);
app.use('/api/trips', trips);
app.use('/api/webgles', webgles);
//指定されたマウントミドルウェア指定されたパスに関数や機能を：要求されたパスのベースが一致したときに、ミドルウェア機能が実行されますpath。
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//ファイルをオクテットストリームとして送信します。
//sendFileする
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});
// express listen 起動
// open => req => EXPESS => get* => send => file, db => OK!!!!
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
