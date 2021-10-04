let taskList = [ 'Tomar Café', 'Reunião', 'Brincar com o cachorro'];
console.log(taskList.length);

let searchForFirstTask = taskList[0];
console.log(searchForFirstTask)

let searchForLastTask = taskList[taskList.length -1];
console.log(searchForLastTask);

taskList.push('Fazer exercicios da Trybe');
console.log(taskList);

taskList.unshift('Escovar os dentes')
console.log(taskList)

taskList.pop()
console.log(taskList)

taskList.shift()
console.log(taskList)

let indexOfTask = taskList.indexOf('Reunião');
console.log(indexOfTask)

// Exercicio 1
let menu = ['Home', 'Serviços','Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// Exercicio 2
let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

menu.push('Contato');
console.log(menu);