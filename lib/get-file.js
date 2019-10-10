const getFileAsync = require('./get-file-async');

function getFile(filename) {
  return getFileAsync(filename)
    .then(data => data.trim());
}

module.exports = getFile;