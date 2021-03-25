const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addperiod = (lesson,turno,periodo) =>{
  lesson[turno] = periodo;
}

addperiod(lesson2,'turno','tarde');
console.log(lesson2);

const listkeys = (obj) => {
  let objeto = obj
  console.log(Object.keys(objeto))
}

listkeys(lesson3)

const sizeObject = (obj) => {
  let sizeObj = Object.keys(obj)
  console.log(`O tamanho do Objeto é ${sizeObj.length - 1}`)
}

sizeObject(lesson2)

const listvalues = (obj) => {
  let objeto = obj
  console.log(Object.values(objeto))
}

listvalues(lesson3)


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons)

const totalStudents = () =>{
let total = 0
  for( keys in allLessons){
    total += allLessons[keys]['numeroEstudantes']
  }
   return console.log(total)
}
totalStudents()

// 7
const getValueByNumber = (obj, pos) => {
let arrayValue = Object.values(obj)

return console.log(arrayValue[pos])
}
getValueByNumber(lesson1,0)

//8

const veryfyPair = (obj,key,value) => {
  let arrayKeys = Object.keys(obj);
  let arrayValues = Object.values(obj);
  for(let index = 0 ; index < arrayKeys.length; index +=1 ){
    if(arrayKeys[index] == key  && arrayValues[index] == value){
      return console.log(true)
    } else {
      return console.log(false)
    }
  }
}
veryfyPair(lesson3,'materia','Maria Clara')

// bonus

const totalStudentsMath = () =>{
  let total = 0
  for( keys in allLessons){
    if( allLessons[keys]['materia'] === 'Matemática'){
    total += allLessons[keys]['numeroEstudantes']
  }
 } return console.log(`O total de alunos em Mátematica é :${total}`)

}

totalStudentsMath()

const createReport = (object,teacher) => {
let newObject = {}
let array = []
let total = 0
  for(keys in object){
    if(object[keys]['professor'] == teacher){
      total += object[keys]['numeroEstudantes']
      array.push(object[keys]['materia'])
      newObject = {
        professor: teacher,
        aulas:  array,
        estudantes: total
      }
    }
  }
  return console.log(newObject)
}
createReport(allLessons,'Carlos')