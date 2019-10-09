#!/usr/bin/env node

const reader = require('commander');
const io = require('socket.io-client');
const URL = 'http://localhost:7890';
const socket = io.connect(URL);
const getFileAsync = require('../lib/get-file-async');

reader
  .version('0.0.1')
  .command('readAndCapitalize <filename>')
  .alias('rac')
  .description('A socket.IO based application to re-write a text file with all characters converted to upper-case')
  .action(filename => {
    getFileAsync(filename)
      .then(data => {
        socket.emit('file-read', data.trim());
      })
      .catch(err => {
        socket.emit('file-error', err);
      });
    
  });

reader.parse(process.argv);

