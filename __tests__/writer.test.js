jest.mock('../lib/write-file-async');
const writeFileAsync = require('../lib/write-file-async');

const sampleText = 'FILE TEXT HERE';
writeFileAsync.mockResolvedValue(sampleText);

describe('File Writer', () => {
  it('gets file contents from a filename', () => {
    return writeFileAsync('filename', sampleText)
      .then(content => {
        expect(content).toBe(sampleText);
      });
  });

});
