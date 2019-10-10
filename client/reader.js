#!/usr/bin/env node

const reader = require('commander');
const path = require('path');
const getFile = require('../lib/get-file');

const io = require('socket.io-client');
const URL = 'http://localhost:7890';
const socket = io.connect(URL);

reader
  .version('0.0.1')
  .command('readAndCapitalize <filename>')
  .alias('rac')
  .description('A socket.IO based application to re-write a text file with all characters converted to upper-case')
  .action(filename => {
    filename = path.resolve(filename);
    getFile(filename)
      .then(content => {
        socket.emit('file-read', { filename, content });
      })
      .catch(err => {
        socket.emit('file-error', err);
      });
    socket.on('done', message => {
      console.log(message);
      process.exit(0);
    });
  });

reader.parse(process.argv);
