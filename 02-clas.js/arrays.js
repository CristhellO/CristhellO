
// ARRAYS = son  colecciones de datos, nos permieten almacenar un conjunto de datos.
// los objetos pueden almacenar distintos tipos de datos, estan separados por comas y se utilizan los cochetes [] y dentro todos los valores de ese array separados por ,
ejemplo:   //definiendo e inicializando un array en JS
          //CREO UNA CONSTANTE:FRUIT + 3 CADENAS DE TEXTO 
const fruits = ["apple", "orange", "lemon"]   // ARRAY CON 3 STRING
                 //0        //1       //2       // colas/elemento de la posicion del array     
//CREO UNA CONSTANTE:FRUIT + 3 CADENAS DE TEXTO 

// los indices y las posicines empiezan en CERO. 
//la longitud es distinta a la posicion de la array, la longitud es la cantidad de elementos, la posicion/indice es el lugar que ocupa dentro de un array. 
// Podemos acceder a los elementos del array mediante su índice.

console.log(fruits[0]) // Apple    //accedemos a la 1era posicion del array fruit
fruits[0] = “banana”   //escribir/machacar el valor de una posicion en el array (utilizamos el operador de asignacion)
console.log(fruits.length) // 3   //consultar logitud o cantidad de elementos que existen en el array  
console.log(fruits[3]) // undefined   //posiciones del array que no existe, nos devuelve undefined.


// los ARRAYS nos ofrecen distintos metodos para poder consultar y operar con los datos de un array
  //ESTOS ELEMENTOS SE OFRECEN PARA LOS ARRAYS 
at(index) //acceder a una posicion concreta del Array, muy comodo para el ultimo elemento 
Pop() // eliminan el ultimo elemento del array 
shift() // elimina el primer elemento del array 
Push(item) // añadir un elemento por el final 
unshit(item) // añadir un elemento por el principio
// todos estos metodos mutan un array, lo cambian el tipo de datos por el que son ejecutados.

//Podemos encontrarnos arrays de arrays. Es decir, arrays bidimensionales.
   //matrix: por cada posicion del array  el tipo de dato que alamacena es otro array 

    const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
   ];
   
//matrix :(matriuskas) es una array en el que por  el que cada posicion del array  el tipo de dato que almacena es otro array.


// recorrer un array: (depende de como se quiera recorrer) ejemplo: anidar dos bucles = 1.para recorrer el primer array, otro para recorrer por cada posicion el array que alberga  
//Para recorrer un array, podemos:
  //● Usar bucles de JS, como un for, while, for..of, etc.
  //● Utilizar métodos de los Arrays como forEach o map: por si se necesita modificar el array

for(let i = 0; i > Array.length;i++) {   //for + definimos un indice, una condicion de parada y un incremento de ese indice.
    console.log(i)    // y dentro el codigo que se va a ejecutar, siempre y cuando la condicion se cumpla.
} 

Array.forEach(item => console.log(item))   //foeEach + una funcion por cada uno de los elemmentos del array, recibe el dato(item) y se hace un console.log de ese valor

// utilizar metodos arrays como  forEach = metodo que como argumento recibe una funcion. forEach: funcion que recibe una funcion, esa funcion es ejecutada por cada elemento del array, recibiendo por parametro el valor del array  

// EJERCICIOS ARRAYS (en clase)
//1
const frutasnombre = ['manzana', 'banana', 'limon', 'naranja'];

frutas,forEach(frutasnombre =>  {
console.log(frutasnombre) })


//2
const frutas = ['manzana', 'banana', 'limon', 'naranja'];

frutas.push(true)
frutas.pop ()
frutas.pop ()
frutas.pop ()

frutas.forEach(frutasnombre => {
console.log(frutasnombre) })

//CONSOLA
manzana
banana

//3
const frutas = ['manzana', 'banana', 'limon', 'naranja'];

fruits.shift()

frutas.forEach(frutasnombre => {
  console.log(frutasnombre) })

//CONSOLA
banana
limon
naranja


//4
const frutas = ['manzana', 'banana', 'limon', 'naranja'];

fruits.unshift( 'añado al principio' )

frutas.forEach(frutasnombre => {
  console.log(frutasnombre) })

  //CONSOLA
  añado al principio
  banana
  limon
  naranja

//buscar
   //array: por posicion.
   //objeto: por nombre/clave.


//EJERCICIO 2 EN CLASE

const people = [
   {name: 'jhon', age: 30, genre: 'male' },
   {name: 'edu', age: 32, genre: 'male' },
   {name: 'isela', age: 20, genre: 'female' },
]

const females = people.filter(person => person.genre === 'female')
console.log(females)
console.log(females.lenght)

console.log(people.every(person => person.genre === 'female'))

//CONSOLA
[ { name: 'isela', age: 20, genre: 'female' } ]
undefined
false



console.log(people.every(person => person.genre === 'female'))

people.some(person => person.genre === 'female')
// hay alguna mujer aqui?
// metodo idoneo: some: evalua esta condicion en todos los elementos del array. con que se cumpla 1 vez ya devuelve true 

//todas las personas de este array son muejere?
people.every(person => person.genre === 'female')   //aqui todos no cumple esta condicion, entonces devuelve un falsa