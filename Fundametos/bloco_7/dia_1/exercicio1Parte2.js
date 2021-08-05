const fatorial = num => {
  let mult = 1;
  let str = ''
  for(let index = num ; index > 0 ; index -= 1){
    mult *=  index;
  }
    for(let i = num ; i > 1; i -= 1){

    str += i + "x"
  }
return console.log(`${num}!=${str}1=${mult}`)
}
fatorial(7)