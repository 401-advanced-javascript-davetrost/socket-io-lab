const fileWriter = require('./lib/write-file-async');

fileWriter('some-file.txt', 'TEXT')
  .then(res => console.log('done', res));
