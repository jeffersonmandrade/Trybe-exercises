
function verificarFinal (a,b){
let word = a.split('').reverse()
let ending = b.split('').reverse()
let contador=0

console.log(word)
console.log(ending)
for(let index = 0; index < ending.length;index++){
  if(ending[index]==word[index]){
    contador +=1
  }
}
console.log(contador)

if(contador == ending.length){
  return console.log(true)
}else{
  return console.log(false)
}
}

verificarFinal("Carro","ro")