function numbersGen(){
  return Math.floor(Math.random() * 101);
}


describe('teste função numbersGen', () => {
  test('numberGen = 10',() =>{
     numbersGen = jest.fn().mockReturnValue(5);
    expect(numbersGen()).toBe(5);
    expect(numbersGen).toHaveBeenCalled();
  })
})