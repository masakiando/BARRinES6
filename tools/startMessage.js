import colors from 'colors';
import fs from 'fs';

/* eslint-disable no-console */

console.log('Starting app in dev mode...'.white);

fs.readFile('./src/index.html', 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
    console.log('successfully deleted ./src/index.html 😏😏😏'.blue);
  }
});
