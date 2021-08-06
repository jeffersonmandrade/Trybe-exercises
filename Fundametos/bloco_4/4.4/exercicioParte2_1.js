function verificaPalindrome (nome){

let palindrome = nome;
let array = palindrome.split('');
let arrayInvert = [];
let contador = 0;
for(let index = (array.length-1); index >= 0;index -= 1){
  arrayInvert.push(array[index]);

};
for(let index = 0; index < array.length;index += 1){
 if(array[index]==arrayInvert[index]){
  contador += 1;
 };
};

if(contador == array.length){
  return console.log(true);
}else{
  return console.log(false);
};
}

verificaPalindrome('desenvolvimento')
