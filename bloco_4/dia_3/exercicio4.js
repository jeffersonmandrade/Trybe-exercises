let n = 5;
let str = "*"
let espace = ' '

for(let index = 0;index < n ; index++){
  if(index % 2 == 0){
    console.log(espace.repeat((n-index)/2) + str.repeat(index+1))
  }
}