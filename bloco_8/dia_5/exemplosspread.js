const numbers = [1, 2, 3];
const newArray = [...numbers,4,5,6]
console.log(newArray)

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer,...fall,...winter,...spring]
console.log(months)

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const info = [75,1.8]
console.log(imc(...info))

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40]
console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};
const customer = {...people,...about}
console.log(customer)

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'banana', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['abacate', 'melancia', 'mamão'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const newArray = [...fruit,...additional]
  return newArray
};

console.log(fruitSalad(specialFruit, additionalItens));