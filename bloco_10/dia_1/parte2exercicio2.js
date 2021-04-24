function techlist(array, name) {
if(array.length === 0){
  return "Vazio!"
}
array.sort()
const newArray = []
array.forEach((tec) => {
  const newObjt = {}
  newObjt.name = name
  newObjt.tech = tec
  newArray.push(newObjt)
});
return newArray
}
module.exports = techlist