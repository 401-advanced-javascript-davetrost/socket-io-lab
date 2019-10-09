require('dotenv').config();
const io = require('socket.io')(process.env.SOCKETIO_PORT);

io.on('connection', socket => {
  socket.on('file-read', data => {
    socket.emit('log', '[server]state=file-read > received data: ' + data);
    socket.emit('capitalize-file');
  });
  socket.on('file-write', data => {
    socket.emit('log', '[server]state=file-write > received data: ' + data);
    socket.emit('save-file');
  });
  socket.on('file-saved', data => {
    socket.emit('log', '[server]state=file-saved > received data: ' + data);
  });
});

