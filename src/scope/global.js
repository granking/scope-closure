// variables 

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion


// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit () {
console.log(fruit);
}

bestFruit();


// Esta es otra forma pero es una mala practica
function countries() {
country = 'Colombia'; // queda como variable global
console.log(country); // Colombia
}

countries();
console.log(country); // Colombia