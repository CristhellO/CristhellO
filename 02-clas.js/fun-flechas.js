
// son otras formas que tenemos en javascript para definir y utilizar funciones de una forma mas ligera.

const prinToConsole = value=> console.log('debug:',value)   // DEFINIDA/DECLARADA COMO SI FUERA UNA FUNCION FLECHA 

// una variable en JS podemos guardar una funcion.
//los argumentos pueden llevar parentesis o no
//si la funcion tiene mas de una linea necesitamos llaves {}
// en caso de no {} el return va implicito.

// FUNCIONES FLECHA

// Nuestra antigua función suma
const sum = (a, b) => a + b;
console.log(sum(5, 3))


// PARÉNTESIS DE LOS ARGUMENTOS

//NOTA:
//las funcion en javascript crean un contexto nuevo.
//funciones arrow heredan EL CONTEXTO DE DONDE SON UTILIZADAS .

const sayHi = () => console.log('hola!')                        // sin argumentos, parámetros necesarios. obligatorio parentesis
const only1Argument = a => console.log(a)                       // sólo 1 argumento, paréntesis opcionales.
const moreThanOneArgument = (a, b, c) => console.log(a, b, c)   //  2- más de un argumento, paréntesis obligatorios

// USO DE LLAVES
// Funciones de una linea sin llaves, return implícito. Como la función sum de antes. no se escriben con el retun, va implicito. 
// Funciones multilínea, necesitamos escribir llaves y poner el return intencionadamente.
const sum2 = (a, b) => {
  console.log('se hará la suma de ', a, ' más ', b);
  return a + b;                                                // las funciones arrow de una linea llevan el return implicito 
}
const result = sum2(1, 2)
console.log(result)

// las funciones en javascrip funcionan como objetos.(todo por destras son objetos)





//Ejemplos
   //Uso básico
   
// Una función flecha vacía devuelve undefinided
let empty = () => {};

(() => 'foobar')();
// Devuelve "foobar"
// (esta es una expresión de función invocada inmediatamente)

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Fácil filtrado de arreglos, mapeo, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter(v => v % 2 == 0);
// [6, 0, 18]

var double = arr.map(v => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// Cadenas de promesas más concisas
promise.then(a => {
  // ...
}).then(b => {
  // ...
});

// Funciones flecha sin parámetros que son visualmente más fáciles de procesar
setTimeout( () => {
  console.log('sucederá antes');
  setTimeout( () => {
    // código más profundo
    console.log ('Sucederá más tarde');
  }, 1);
}, 1);