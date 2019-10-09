const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', data => {
    console.log('received message with', data);
    
    io.emit('log', '[server]state=file-read > received data: ');
    io.emit('capitalize-file', data);
  });
  socket.on('file-write', data => {
    io.emit('log', '[server]state=file-write > received data: ' + data);
    io.emit('save-file');
  });
  socket.on('file-saved', data => {
    io.emit('log', '[server]state=file-saved > received data: ' + data);
  });
  socket.on('file-error', error => {
    console.log('Error: ' + error);
  });
});

