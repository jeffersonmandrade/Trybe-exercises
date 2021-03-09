function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  let ul = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = dezDaysList[index];
    li.className = 'day';
    if (dezDaysList[index] == '24' || dezDaysList[index] == '25' || dezDaysList[index] == '31') {
      li.className += ' holiday';
    }

    if (dezDaysList[index] == '4' || dezDaysList[index] == '11' || dezDaysList[index] == '18' || dezDaysList[index] == '25') {
      li.className += ' friday';
    }

    ul.appendChild(li);
  }
}
createDays()

// 2 Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function holidayButtons() {
  let creatBut = document.querySelector('.buttons-container');
  let buttons = document.createElement('button');
  buttons.innerHTML = 'Feriados';
  buttons.id = "btn-holiday";

  creatBut.appendChild(buttons);
}
holidayButtons()
// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

document.querySelector('#btn-holiday').addEventListener('click', colorButtons);
let dayHoliday = document.getElementsByClassName('day holiday');

function colorButtons() {
  for (let index = 0; index < document.getElementsByClassName('day holiday').length; index += 1) {
    if (dayHoliday[index].style.backgroundColor === 'yellow') {
      dayHoliday[index].style.backgroundColor = 'rgb(232,238,239';
    } else {
      dayHoliday[index].style.backgroundColor = 'yellow';
    }
  }
}
// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .


function fridayButtons() {
  let string = "Sexta-Feira";
  let creatBut = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
  buttonFriday.innerHTML = string;
  buttonFriday.id = "btn-friday";

  creatBut.appendChild(buttonFriday);
}
fridayButtons()

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let string2 = 'Sextou!'
let friday = document.getElementsByClassName('day friday')
document.querySelector('#btn-friday').addEventListener('click', sextou);

function sextou() {
  for (let index = 0; index < document.getElementsByClassName('day friday').length; index +=
    1) {
    let sextas = [4, 11, 18, 25]
    if (friday[index].innerText == string2) {
      friday[index].innerText = sextas[index]
    } else {
      friday[index].innerText = string2
    }
  }
}
// 6-Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .
let days = document.querySelector('#days');

function mouseOver() {


  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '600px';
  })
};

function mouseout() {
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};
mouseOver();
mouseout();

// 7-Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function newTask(taskName) {

  let fatherTask = document.querySelector('.my-tasks');
  let tasks = document.createElement('span');

  tasks.innerHTML = taskName;
  fatherTask.appendChild(tasks);

};

newTask('Cozinhar');

// 8- Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function colorTask(cor) {

  taskFather = document.querySelector('.my-tasks')
  creatCor = document.createElement('div')
  creatCor.style.backgroundColor = cor
  taskFather.appendChild(creatCor)
  creatCor.className = 'task'

}
colorTask('red')

// 9-Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
function taskClass() {

  let newClassName = document.getElementsByClassName('task selected')
  let myTask = document.querySelector('.task')

  myTask.addEventListener('click',function (event){
    if(newClassName.length == 0){
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }

  });


};

taskClass()

// 10-Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

let day = document.querySelector('#days')

day.addEventListener('click',function (event) {
  event.target.className = 'task selected'

})