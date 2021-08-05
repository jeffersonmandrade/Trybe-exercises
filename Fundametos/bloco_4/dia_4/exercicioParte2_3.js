function menorIndice(a){
let array = a

let indice = 0
let menor = 0

for(let index = 0; index < array.length; index += 1){

  if( menor  > array[index]){
    menor = array[index]
    indice = index
  }
}

return console.log(indice)
}
menorIndice([2, 4, 6, 7, 10, 0, -3])