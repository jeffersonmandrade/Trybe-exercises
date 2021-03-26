const assert = require('assert')


function secondThirdSmallest(array) {
  let results = []
  const newArray = array.sort((x, y) => x-y)
  results.push(newArray[1],newArray[2])
  return results
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

secondThirdSmallest(parameter)
assert.deepStrictEqual(secondThirdSmallest(parameter),result)
