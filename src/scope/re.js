//aqui veremos la reasignacion redeclaracion de las variables let const y var

var firstName; // Undefined
firstName = 'Pedro';
console.log(firstName);

var lastName = 'Juan'; // declarar / asignar
lastName = 'Camilo'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarar / asignar
var secondName = 'Pato'; // reasignar
console.log(secondName);

//let
let fruit = 'Apple';
fruit = 'kiwi';
console.log(fruit);

// let fruit = 'Banana'; // no se debe redeclarar una variable con let
// console.log(fruit);

//const
const animal = 'dog';
//animal = 'cat'; const tampoco deja reasinar ya que es una constante
// const animal = 'Snake'; Tampoco se puede redeclarar
console.log(animal);

const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);