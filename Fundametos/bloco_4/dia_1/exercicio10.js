let custo = 1;
let venda = 2;
let quantidade = 1000;

let custoComImpos = (custo*0.20 + custo)

if(custo <= 0 || venda <= 0){
    console.log("Erro, os valores de entrada precisam ser maiores que 0")
}else {
    let lucro = (venda - custoComImpos)*quantidade
    console.log('R$',lucro) 
}

