const io = require('socket.io-client');
const URL = 'http://localhost:7890';
const socket = io.connect(URL);
const capitalizeContent = require('../lib/capitalize-content');

socket.on('capitalize-file', message => {
  socket.emit('file-write', capitalizeContent(message));
});
