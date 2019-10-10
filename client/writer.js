const io = require('socket.io-client');
const URL = 'http://localhost:7890';
const socket = io.connect(URL);
const writeFileAsync = require('../lib/write-file-async');

socket.on('save-file', ({ filenameToWrite, capitalizedContent }) => {
  writeFileAsync(filenameToWrite, capitalizedContent)
    .then(data => {
      socket.emit('file-saved', data);
    })
    .catch(err => {
      socket.emit('file-error', err);
    });

});
