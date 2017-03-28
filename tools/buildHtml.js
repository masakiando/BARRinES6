// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
//このスクリプトはsrc / index.htmlを/dist/index.htmlにコピーします。
// Nodeとcheerioを使って単純なファイル変換を行う良い例です。
//この場合、prodで個別のcssファイルしか使用しないので、変換は便利です。
import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
  //個別のスプレッドシートはプロダクションビルドのためにのみ使用されるため、ここに動的に追加する必要があります。
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});
