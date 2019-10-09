const io = require('socket.io-client');
const URL = 'http://localhost:7890';
const socket = io.connect(URL);

socket.on('log', message => console.log(message));
