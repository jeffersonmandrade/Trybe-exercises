// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };


// const {name,price,seller} = product;
// console.log(` A ${name} está no valor ${price} na loja: ${seller}.`)


// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const {a : name, b: classAssigned, c: subject} = student;
// //console.log(a)
// console.log(student.b)
// console.log(classAssigned)
// const nome = student.a;
// console.log(nome)

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const sale = ({name,price,seller}) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`)
}
sale(product)
const newProm = {
  name: 'Som LG',
  price: '600.0',
  seller: 'Casas Bahia',
}
sale(newProm)