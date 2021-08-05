const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortArray = array => {
  for (let index = 1; index < array.length; index += 1) {
    for (let j = 0; j < index; j += 1) {
      if (array[index] < array[j]) {
        let pos = array[index];
        array[index] = array[j];
         array[j] = pos;
      }

    }
  }
    return console.log(`"Os números ${array} se encontram ordenados de forma crescente!"`)
}

sortArray(oddsAndEvens)



console.log(`"Os números ${oddsAndEvens.sort((a,b) => a - b)} se encontram ordenados de forma crescente!"`)

