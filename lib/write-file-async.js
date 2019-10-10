const fs = require('fs').promises;

module.exports = (filename, content) => {
  return fs.writeFile(filename, content)
    .then(() => `writeFile completed for ${filename}.`);
};
