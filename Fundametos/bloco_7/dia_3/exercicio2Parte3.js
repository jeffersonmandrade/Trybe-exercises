const assert = require('assert')
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let count = 0
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(count += 1);
    } else {
      results.push(characters[index]);
    }
  }
  let wordFinished = ''
    for(key in results){
      wordFinished += results[key]
    }
  return `${wordFinished}`;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result)