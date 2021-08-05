let array = [1, 1, 2, 3, 4, 5, 3];
let maior = 0
let maisRepeticao =0;
let bloco ={}
for(let index = 0;index< array.length;index += 1){
  let quantidade = 0
  for(let j = 0; j< array.length;j++){
    if(array[index] == array[j]){
      quantidade+=1
    }

  }
    bloco[array[index]] = quantidade

}
for(key in bloco){
  if(maior < bloco[key]){
    maior = bloco[key]
    maisRepeticao=key
  }
// for(key in bloco){
//   if(bloco[key] == maior){
//     maisRepeticao=key
//   }
// }
}
console.log(maisRepeticao)