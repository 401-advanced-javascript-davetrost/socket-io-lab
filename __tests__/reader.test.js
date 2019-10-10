const getFile = require('../lib/get-file');

jest.mock('../lib/get-file-async');
const getFileAsync = require('../lib/get-file-async');

const sampleText = 'file text here';
getFileAsync.mockResolvedValue(sampleText);

describe('File Reader', () => {
  it('gets file contents from a filename', () => {
    return getFile('filename')
      .then(content => {
        expect(content).toBe(sampleText);
      });
  });


});
