const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/dialog-example/runtime-es5.js',
    './dist/dialog-example/runtime-es2015.js',
    './dist/dialog-example/polyfills-es5.js',
    './dist/dialog-example/polyfills-es2015.js',
    './dist/dialog-example/main-es5.js',
    './dist/dialog-example/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/modal.js');
  await fs.copyFile('./dist/dialog-example/styles.css', 'elements/styles.css')
  
})();