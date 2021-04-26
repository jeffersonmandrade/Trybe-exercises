const numbersGen = () =>{
  return Math.floor(Math.random() * 101);
}
console.log(numbersGen())

describe('teste função numbersGen', () => {
  test('numberGen = 10',() =>{
    let number = numbersGen()
     number = jest.fn().mockReturnValue(5);
    expect(number()).toBe(5);
    expect(number).toHaveBeenCalled();
  })
})