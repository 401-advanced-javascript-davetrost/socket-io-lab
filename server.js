const io = require('socket.io')(7890);
let filenameToWrite;

io.on('connection', socket => {
  socket.on('file-read', ({ filename, content }) => {
    filenameToWrite = filename;
    io.emit('log', '[server]state=file-read > received content from file: ' + filename);
    io.emit('file-write', content);
  });
  socket.on('file-write', capitalizedContent => {
    io.emit('log', '[server]state=file-write > received data: ' + capitalizedContent);
    io.emit('file-saved', { filenameToWrite, capitalizedContent });
  });
  socket.on('file-saved', data => {
    io.emit('log', '[server]state=file-saved > received data: ' + data);
  });
  socket.on('file-error', error => {
    console.log(error);
  });
});
