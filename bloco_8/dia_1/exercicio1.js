const cadastro = (name) =>{
  const email = name.toLowerCase().split(' ').join('_')
  return { name ,email: `${email}@trybe.com`}
}


const newEmployees = (newEmploye) => {
  const employes = {
    id1 : newEmploye('Pedro Guerra'),
    id2:  newEmploye('Luiza Drumond'),
    id3: newEmploye('Cara Paiva'),
  }
  return employes
}

console.log(newEmployees(cadastro))