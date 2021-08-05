
//   switch(nota){
//     case (nota >= 90):
//       console.log("A");
//       break;

//     case (nota >= 80):
//       console.log("B");
//       break;

//     case (nota >= 70):
//       console.log("C");
//       break;

//     case (nota >= 60):
//       console.log("D");
//       break;
//     case (nota >= 50):
//       console.log("E");
//       break;
//     case (nota<50):
//       console.log("F")
//       break;
    

// //}else {
//   //console.log('Erro nota invalida!!')
// //
let nota = 101;
if(nota >= 0 && nota <=100){
  if(nota >=90){
    console.log("A")
  }else if (nota >=80){
  console.log('B')
  }else if(nota>=70){
    console.log("C")
  }else if(nota>=60){
    console.log("D")
  }else if(nota>=50){
    console.log("E")
  }else if(nota<50){
    console.log("F")
  }
}else {
  console.log("Valor invalido!!")
}
