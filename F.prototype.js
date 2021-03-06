let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

let myrabbit = new Rabbit("Kartik dandborha");

console.log(`${JSON.stringify(myrabbit.__proto__)}`);

Rabbit.prototype = animal;

let newRabbit = new Rabbit("New proto vala rabbit");
console.log(`newRabbit proto: ${JSON.stringify(newRabbit.__proto__)}`);
console.log(`old myrabbit proto: ${JSON.stringify(myrabbit.__proto__)}`);
