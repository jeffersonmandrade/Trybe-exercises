// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer)
// customer.lastName = 'Faria'
// console.log(customer)
// let newKey = 'fullName'
// const fullName = `${customer.firstName} ${customer.lastName}`
// customer[newKey] = fullName
// console.log(customer)

const creatobj = (obj,key,value) => {
  let newKey = key
  obj[newKey]= value;
  return console.log(obj)
}
creatobj(carro={
  a: 1
},'b',2)