import themes from './index';
import fs from 'fs';

function getStyles() {
  let result = `
@mixin common {
  .hljs {
    background: inherit;
  }
}`;

  themes.forEach(function(value) {
    let tail = `
.${value} {
  @import "~highlight.js/styles/${value}";
  @include common;
}`;

    result += tail;
  });

  return result;
}

function exMakeDir(dirname) {
  try {
    fs.mkdirSync(dirname);
  } catch(err) {
    if (err.code === 'EEXIST') {
      console.log(`folder '${dirname}' already exists.`);
    }
    else {
      throw err;
    }
  }
}

exMakeDir('styles');
exMakeDir('lib');
fs.writeFileSync('./styles/index.scss', getStyles(), 'utf8');