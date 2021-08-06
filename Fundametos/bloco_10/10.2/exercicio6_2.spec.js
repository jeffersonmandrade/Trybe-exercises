const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (age) => (
  new Promise((resolve, reject) =>{
    setTimeout(() => {
    const animal = Animals.find((animal) => animal.age === age)
    if(animal){
      return resolve(animal)
    }
    return reject('Nenhum animal com esse nome!')
  }, 25)
  })
);

const getAnimal = (age) => {
  // Adicione o código aqui.
  return findAnimalByName(age).then(list => list)
};
// ---------------------
describe(' find anima with age', () => {
  test('find animal  age = 1', async () => {
    const animal =  await getAnimal(1);
    expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' })
   })
})

describe('Erros', () => {
  test('error', async () => {
    expect.assertions(1)
    // try{
    //   await getAnimal(10)
    // } catch (error){
    await expect(getAnimal(10)).rejects.toEqual('Nenhum animal com esse nome!')
    })
})