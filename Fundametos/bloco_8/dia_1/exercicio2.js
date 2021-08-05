const check = (aposta,numSorteado) => aposta === numSorteado



const lotery = (aposta, callback) =>{
  const numSorteado = Math.ceil(Math.random() *5)
return callback(aposta,numSorteado)? 'Parabéns Você Ganhou' : 'Tente Novamente';
}

console.log(lotery(5,check))


