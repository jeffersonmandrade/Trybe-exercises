const greeting = (user = 'usuario') => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

const multiply = (number = 1, value = 1) => {
  // Escreva aqui a sua função
  return  number * value
};

console.log(multiply(8));