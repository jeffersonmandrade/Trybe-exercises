let salariobruto = 3000;
let descInss;
let descIr;
let salarioLiquido;

if(salariobruto<=1556.94){
    descInss = salariobruto*0.08;
}else if (salariobruto >=1556.95 && salariobruto <=2594.92){
    descInss = salariobruto*0.09;
}else if (salariobruto>=2594.93 && salariobruto<=5189.82){
    descInss = salariobruto*0.11;
}else {
    descInss = 570.80;
}
let salarioDescInss = salariobruto - descInss

if (salarioDescInss<=1903.98){
    descIr = 0;
}else if (salarioDescInss>=1903.99 && salarioDescInss <=2826.65){
    descIr = salarioDescInss*0.075 - 142.80;
}else if(salarioDescInss>=2826,66 && salarioDescInss<= 3751.05){
    descIr = salarioDescInss*0.15 -354.80;
}else if(salarioDescInss>=3751.06 && salarioDescInss<=4664.68){
    descIr = salarioDescInss*0.225 - 636.13
}else{
    desIr = salarioDescInss*0.275 - 869.36
}
console.log("R$",salarioLiquido = salariobruto - descIr -descInss)