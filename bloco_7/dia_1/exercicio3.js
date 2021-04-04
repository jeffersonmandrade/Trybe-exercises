const button = document.getElementById('buttonClick')
const quantidade = document.getElementById('quantidade')
let soma = 0
button.addEventListener('click',() => {
  soma += 1
  quantidade.innerHTML = soma

})
