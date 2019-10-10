const io = require('socket.io-client');
const URL = 'http://localhost:7890';
const socket = io.connect(URL);

socket.on('log', message => {
  console.log(message.slice(0, 256));
  if(message.length > 256) console.log('... [message truncated for brevity]');
});
