let n =13;
let str = "*";
let space = " ";

if( n % 2 !=0){
// Inicio
console.log(space.repeat(n/2)+str)
//meio
for(let index = 1;index<(n-1);index++){
  if(index % 2 == 0){
    console.log(space.repeat((n-index)/2) + str + space.repeat(index-1) + str)
  }

}
//final
console.log(str.repeat(n))
}else{
  console.log("O valor de n precisa ser ímpar.")
}
