const rNumbers = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function changeRomano(number) {
  number = number.toLowerCase();
  const len = number.length;
  let soma = rNumbers[number[len - 1]];
  let atual = rNumbers[number[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    const prox = rNumbers[number[len - i]];
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}

console.log(changeRomano('MMXVIII'));
console.log(changeRomano('VI'));
console.log(changeRomano('IV'));