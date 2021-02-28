let num = 18;
let divisors = [];

for(let index = 1;index <= num;index+=1){
  if(num % index == 0){
    divisors.push(index)
  }
}
if(divisors.length<=2){
  console.log(`${num} it is Prime Number.`)
}else{
  console.log(`${num} It isn't Prime Number. `)
}