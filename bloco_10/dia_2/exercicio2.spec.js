const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };

  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };

        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };

  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('verifica o getUserName', () => {
 test('retorna o user' ,() =>{
   expect.assertions(1);
        return getUserName(4).then((name) => expect(name).toEqual('Mark'))
      })

  test('retorna o erro',() => {
    expect.assertions(1)
    return getUserName(7).catch(error => {
      expect(error).toEqual({error: "User with 7 not found."})
    })
  })
})
