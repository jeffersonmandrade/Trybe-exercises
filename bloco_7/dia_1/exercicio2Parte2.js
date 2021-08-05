
const longestWord = str => {
let arreyStr = str.split(' ')
//console.log(arreyStr)
let maior = 0
let posi = 0
for(let index = 0; index < arreyStr.length; index +=1){
  if(maior < arreyStr[index].length){
      posi = index
  }

}
  return console.log(arreyStr[posi])
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")