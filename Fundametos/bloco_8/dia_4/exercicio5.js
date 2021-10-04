
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const count = names.reduce((result,element) => {
    for(let index = 0; index < element.length; index += 1) {
    if( element[index] === 'a' || element[index] === 'A')  result += 1;

    }
    return result
  }, 0)
  return count;
}


assert.deepStrictEqual(containsA(), 20);