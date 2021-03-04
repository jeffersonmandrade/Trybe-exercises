let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana','Jefferson'];
let nomes = []
let maisCaracter = 0
let indice = 0
for(let index = 0; index < array.length; index += 1 ){
  nomes.push(array[index].split(''))
}

for(let index=0; index < array.length ;index+=1){
  if(maisCaracter < nomes[index].length){
    maisCaracter = nomes[index].length

  }
}

for(let index =0;index < array.length;index += 1){
  if(maisCaracter == nomes[index].length)
  console.log(array[index])
}