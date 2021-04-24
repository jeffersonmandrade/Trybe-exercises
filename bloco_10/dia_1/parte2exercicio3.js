
const hydrate = (order) => {
const array = order.split('')
let count = 0
array.forEach((element) => {
  if(isNaN(element) === false) {
    count += Number(element)
  }

})
if(count > 1){
return `${count} copos de água`
}
return `${count} copo de água`
}
module.exports = hydrate;