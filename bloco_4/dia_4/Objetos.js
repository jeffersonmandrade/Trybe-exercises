// Exercicio 1
let player = {
  name : "Marta",
  lastName : 'Silva',
  age: 34,
  medals : {
  golden :2,
  silver: 3}
  }

  console.log(`A jogadora ${player['name']} ${player.lastName} tem ${player.age} anos.`)
  let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
  player["bestInTheWorld"] = bestInTheWorld

  console.log(player)

  console.log(`A jogadora ${player['name']} ${player.lastName} foi eleita ${(player.bestInTheWorld).length} vezes.`)

  console.log(`A jogadora possui ${player['medals']["golden"]}medalhas de ouro e ${player['medals']['silver']} medalhas de prata`)

