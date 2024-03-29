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

  describe('teste usando async/await',() => {
    test('o id', async () => {
      expect.assertions(1)
      const user = await getUserName(4);
      expect(user).toEqual('Mark')
    })
    it('retorna o erro', async() => {
      expect.assertions(1);
      try{
        await getUserName(7)
      } catch (error) {
        expect(error).toEqual({error: "User with 7 not found."})
      }
    })
  })