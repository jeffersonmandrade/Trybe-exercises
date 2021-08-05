
const correct = 'higher order function';
const user= 'HIGHER ORDER FUNCTION';

const check  = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase()

console.log(check(correct)(user))