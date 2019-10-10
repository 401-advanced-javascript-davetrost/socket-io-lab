const fs = require('fs').promises;

module.exports = filename => fs.readFile(filename, 'utf8');
