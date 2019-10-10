const fs = require('fs').promises;

module.exports = (filename, content) => fs.writeFile(filename, content);
