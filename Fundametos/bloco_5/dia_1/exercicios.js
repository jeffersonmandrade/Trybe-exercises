//1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)"

function textchange (txt){
  document.getElementsByTagName('p')[1].innerHTML = txt
}
textchange("Daqui a 2 anos espero ter um bom emprego como desenvolvedor!")

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

 function colorchange (color){
  document.getElementsByClassName("main-content")[0].style.background = color
}
 colorchange('rgb(76,164,109)')
//3. Crie uma função que mude a cor do quadrado vermelho para branco.
 function colorchange2(color){
  document.querySelector(".center-content").style.backgroundColor = color
 }
 colorchange2('white')

 //4. Crie uma função que corrija o texto da tag <h1>.
function rightH1 (text){
 document.getElementsByTagName('h1')[0].innerHTML = text
}
rightH1("Exercício 5.1 - JavaScript")

//5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function upperCase (tag){

 for(let index = 0;index < document.getElementsByTagName(tag).length; index += 1){
   let txt = document.getElementsByTagName(tag)[index].innerText
   let maiusculo = txt.toUpperCase()
   document.getElementsByTagName(tag)[index].innerText = maiusculo
 }
}
upperCase('p')

//6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function printerTagsP(){
let array = document.getElementsByTagName('p');
for(let index = 0; index < array.length;index += 1){
  console.log(document.getElementsByTagName('p')[index].innerText);

}
}
printerTagsP()