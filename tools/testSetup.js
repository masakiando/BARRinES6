//このファイルはES5で書かれています。
//このファイルは次の処理を行います：
//ノード環境変数を設定する
// 2.テストのために私たちのコードを翻訳するためのバベルを登録する
// 3. Mochaが理解できないWebpack固有の機能を無効にします。
// 4. jsdomが必要なので、Node内のメモリ内DOMを使ってテストできます
// 5.ブラウザを模倣するグローバル変数を設定します。

/* eslint-disable no-var */

/*この設定は.babelrc devの設定を保証します。
 ホットモジュールリロードコード）はテストには適用されません。
 しかし、また、我々はここでそれを本番環境に設定したくない
 2つの理由：
 1. PropType検証の警告が表示されない
 コードがprodモードで実行されています。
 2.テストで詳細なエラーメッセージが表示されない
 製品バージョンコードに対して実行するとき
 */
process.env.NODE_ENV = 'test';

// ES6からES5に移るようにバベルを登録する
//テストが実行される前に
require('babel-register')();

//テスト用のWebpack固有の機能を無効にする
//モカは彼らと何をするべきか分からない。
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

// JSDOMを設定してグローバル変数を設定する
//テスト用のブラウザ環境をシミュレートします。
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
