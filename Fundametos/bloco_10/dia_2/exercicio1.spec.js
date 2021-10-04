const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('test upercase', done => {
  uppercase('casa',(call) => {
    expect(call).toEqual('CASA');
    done();
  })
});