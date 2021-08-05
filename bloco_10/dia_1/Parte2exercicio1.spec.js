const{encode, decode} = require('./Parte2exercicio1')

describe('teste das funções encode e decode', () => {
test('são funções', () => {
  expect( [typeof encode,typeof decode]).toEqual(['function','function'])
})
  it('a, e, i, o, u  são 1, 2, 3, 4, 5',() => {
    expect([encode('a'),encode('e'),encode('i'),encode('o'),encode('u')]).toEqual(['1', '2',  '3', '4', '5'])
  })
  it( '1, 2, 3, 4, 5  são a, e, i, o, u  ',() => {
    expect([decode('1'),decode('2'),decode('3'),decode('4'),decode('5')]).toEqual(['a', 'e',  'i', 'o', 'u'])
  })
  it('não são convertido ',() => {
    expect([encode('bcdfghjklmnpqrstvxz'),decode('6789')]).toEqual(['bcdfghjklmnpqrstvxz','6789'])
  })
  it('same string.lenght', () => {
    expect(['lala'.length,'l1l1'.length]).toEqual([encode('lala').length,decode('l1l1').length])
  })
})