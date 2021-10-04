// A função maior() retorna o índice do maior valor

function maior (a) {
let array = a
let maior = 0;
let indice = 0;

for(let index = 0; index < array.length; index += 1){

  if(maior < array[index]){
    maior = array[index]
    indice = index
  }

}
return console.log("O indice de maior valor é " + indice + ".")
}
maior([2, 3, 6, 7, 10, 1])