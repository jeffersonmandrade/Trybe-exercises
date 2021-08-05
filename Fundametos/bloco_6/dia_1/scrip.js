let estados = document.getElementById('input-state')

let siglas = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}
for(key in siglas){
  let option = document.createElement('option')
  option.value = key
  option.innerText = siglas[key]
  estados.appendChild(option)
}

let d = document.querySelector('#input-date')
function date(d){
let date = d.split('/');
if(date[0] < 31 && date[1] < 12 && date[2] > 0 && date[1] > 0 && date[0]>0){
  return true;
} else {
  return alert('data invalida');
};
}
let send = document.querySelector('#send')
send.addEventListener('click',function(event){
  event.preventDefault()
date(d.value)
})