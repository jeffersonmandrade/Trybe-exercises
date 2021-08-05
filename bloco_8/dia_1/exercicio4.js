const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const contagemrespostas = (certo,respostas,callback) => {
let count = 0;
for (let index = 0; index < certo.length;index += 1){
  const contagemPontos = callback(certo[index],respostas[index])
    count += contagemPontos
  }
  return `Nota: ${count}`
}

const check = (certo,repostas) => {
  if(certo == repostas){
    return 1
  } else if (certo != repostas){
    return -0.5
  }
    return 0
}

console.log(contagemrespostas(rightAnswers,studentAnswers,check))