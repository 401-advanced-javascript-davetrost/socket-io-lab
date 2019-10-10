const capitalize = require('../lib/capitalize-content');

const sampleText = 'file text here';
const upperCaseSampleText = 'FILE TEXT HERE';

describe('Capitalization module', () => {
  it('capitalizes text content', () => {
    expect(capitalize(sampleText)).toBe(upperCaseSampleText);
  });
});