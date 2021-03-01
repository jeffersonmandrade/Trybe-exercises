let array = [2, 3, 6, 7, 10, 1]

function maior (a) {
let array = a
let maior = 0;
let indice = 0;

for(let index = 0; index < array.length; index += 1){

  if(maior < array[index]){
    maior = array[index]

  }
}
for(let index=0 ; index < array.length; index += 1 ){
  if(maior == array[index]){
    indice = index
}
}
return console.log(indice)
}

maior([2, 13, 6, 7, 10, 1])