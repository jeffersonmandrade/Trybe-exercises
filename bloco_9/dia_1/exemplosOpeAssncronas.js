// setTimeout(() => {
//   console.log('Comprar parafusos') // Comprar parafusos
//   console.log('Adicionar ao estoque') // Adicionar ao estoque
// }, 2000);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
/*
* Em impresso no console depois de um tempo/ quando se ua setTimeout()
*/

// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]);

const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1),3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
setTimeout(() => numbers.sort((a,b) => a - b),3000)
setTimeout(() => assert.deepStrictEqual(numbers, [1, 2, 3]),3001); // essa validação falha