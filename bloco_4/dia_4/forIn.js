let cars = ["Saab", "Volvo", "BMW"];

for (let keys in cars) {
  console.log(keys,cars[keys]);
}

let car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

for (let keys in car) {
  console.log(keys +": "+ car[keys]);
}