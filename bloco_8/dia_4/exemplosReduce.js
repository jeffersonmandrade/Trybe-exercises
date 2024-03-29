// const numbers = [32, 15, 3, 2, -5, 56, 10];
// let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

// for (let index = 0; index < numbers.length; index += 1) {
//   sumNumbers += numbers[index];
// }
// console.log(sumNumbers); // 113

// const somaNumbers = numbers.reduce((result,number) => result + number);
// console.log(somaNumbers)

// const getsum = (result,element) => result + element;
// console.log(numbers.reduce(getsum))

// const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) =>{
//   console.log(accumulator);
//   return accumulator + number;
// };
// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers)

// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result,element) => {
//   console.log(result);
//   return result + element;
// };
// const sumNumbers = numbers.reduce(getSum,10)
// console.log(sumNumbers)

// const numbers = [50, 85, -30, 3, 15];

// const bigger = (result,element) => ((result > element) ? result : element);

// console.log(numbers.reduce(bigger,100))

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumEven = (result,element) => (
//   (element % 2 === 0) ? result + element : result

// )
// console.log(numbers.reduce(sumEven))

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

const melhor = (result, element) => {
 if (result.nota > element.nota) return result;
 return element;
};
const theybest = (students) => students.map((element) => ({
  name: element.nome,
  materia: element.materias.reduce(melhor).name
}))
console.log(theybest(estudantes))