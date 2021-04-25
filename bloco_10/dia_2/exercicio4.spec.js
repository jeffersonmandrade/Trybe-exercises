const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
return data.map((repo) => repo.name);

    });
};

describe('Test repositorio Trybe', () =>{
  test('testando todo List', async () =>{
    expect.assertions(2);
    const toDoList = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(toDoList).toContain('sd-01-week4-5-project-todo-list');
    expect(toDolist).toContain('sd-01-week4-5-projct-meme-generator')

  })
})