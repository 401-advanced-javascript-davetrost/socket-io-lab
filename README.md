# socket-io-lab

This is an event driven application that reads, capitalizes, and over-writes a file. Socket.IO is used to "distribute" the responsibility for these tasks to **separate applications**.

## Operational Flow
- The application accepts a filename as a command line parameter
- The file is read from the file system
- Its contents are converted to upper case
- The uppercase contents are written back to the file system
- Following the write operation, report back to the user (console.log) the status
- All errors are thrown to the server via a socket.IO connection

### Server Application
- Establishes a socket.IO server
- The application listens for `file-read`, `file-write`, `file-saved`, and `file-error` events
- When these events occur, the next-in-order event is broadcast through socket.IO, with the necessary payload, to the clients

### Reader Client
- Connects to the socket.io server
- Reads a file that is passed as an argument (commander is used for this)
- Emits the `file-read` event

### Capitalizer
- Connects to the socket.io server
- Subscribes to the `file-read` event, and upon receipt it capitalizes the data.
- Emits the `file-write` event

### Writer
- Connects to the socket.io server
- Subscribes to the `file-write` event, and upon receipt it writes the content to the file path provided
- Emits the `file-saved` event.

### Operational Flow
- Start the server
- In separate terminal windows, start the following:
  - logger (it should connect to the server)
  - writer (it should connect to the server) 
  - capitalizer (it should connect to the server). 
- Then start the reader from the CLI to alter the file and initiate the flow.
- The event stream is visible in the logger and errors are displayed on the server
