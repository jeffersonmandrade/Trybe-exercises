const { test, expect } = require('@jest/globals');
const{sum, myRemove} = require('./exercicio1')

describe('Teste dos exercios do exercicio 1',() => {
  test('soma 4 e 5', () => {
    expect(sum(4,5)).toBe(9);
  })
  test('soma 0 e 0', () => {
    expect(sum(0,0)).toBe(0);
  })
  test('mensagem de erro', () => {
    expect(() => sum(4,"5")).toThrow('parameters must be numbers')
  })

})

describe('Teste exercicio 2', () => {
  test('retorna o array esperado [1,2,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  test('não retorna o array [1,2,3,4,]', () => {
    expect((myRemove([1, 2, 3, 4], 3))).not.toEqual([1, 2, 3, 4])
  })
  test('retorna o array esperado [1,2, 3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})