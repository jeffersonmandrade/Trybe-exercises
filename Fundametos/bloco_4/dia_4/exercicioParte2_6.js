let n = 5
let array = []
let soma = 0
for(let index=1;index<=n;index += 1){
  array.push(index)
}

for(let index = 0;index < array.length;index +=1 ){
  soma +=array[index]
}
console.log(soma)