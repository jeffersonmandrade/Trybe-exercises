let n =5;
let str = "*";
let linha = "" ;

if( n > 1){
for(let index=0 ; index < n;index++){
  linha += str;
}
for(let index=0; index < n;index++){
  console.log(linha);
}}else{
  console.log('ERRO, Valor de n Inválido.');
}

// Metodo usando .repeat
// if(n > 1){
// for(let index = 0; index < n;index++){
//   console.log(str.repeat(n))
// }
// }else{
//   console.log('ERRO, Valor de n Inválido.')
// }