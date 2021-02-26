let salariobruto = 3000;
let descInss;
let descIr;
let salarioLiquido;

if(salariobruto<=1556.94){
    descInss = salariobruto*0.08
}else if (salariobruto >=1556.95 && salariobruto <=2594.92){
    descInss = salariobruto*0.09
}else if (salariobruto>=2594.93 && salariobruto<=5189.82){
    descInss = salariobruto*0.11
}else {
    descInss = 570.80
}
console.log(salariobruto - descInss)