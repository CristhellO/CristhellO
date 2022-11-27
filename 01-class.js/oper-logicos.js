/*Existen cuatro operadores lógicos en JS:

● OR || :esta pensado para operar con valores booleanos.
Este operador lógico compara dos expresiones. Si la primera se evalúa como "falsa", la sentencia devolverá el valor de la segunda expresión. Si la primera se evalúa como "verdadera", la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve como true si cualquiera de las dos expresiones son verdaderas. Ambas expresiones pueden ser verdaderas, pero solo se necesita una para que el resultado sea verdadero.
*/
//  el OR evalua de izquierda a derecha.

true || true //devuelve el primer valor, verdadero
true || false //devuelve el primer valor, verdadero
false || false //devuelve el segundo valor, falso
123 || 'abc' //devuelve el primer valor, 123
'abc' || null //devuelve el primer valor, 'abc'
undefined || 'abc' //devuelve el segundo valor, 'abc'
0 || false //devuelve el segundo valor, falso



/*
● AND && : devolvera true, si todos los operadores que estamos evaluando son true.
Este operador lógico compara dos expresiones. Si la primera se evalúa como "verdadera" (truthy), la sentencia devolverá el valor de la segunda expresión. Si la primera expresión se evalúa como "falsa"(falsy), la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve verdadero si las dos expresiones son verdaderas. Si una o ambas expresiones son falsas, la sentencia completa se devolverá como falsa.
*/
true && true //devuelve el segundo valor, verdadero
true && false //devuelve el segundo valor, falso
false && false //devuelve el primer valor, falso
123 && 'abc' // devuelve el segundo valor, 'abc'
'abc' && null //devuelve el segundo valor, nulo
undefined && 'abc' //devuelve el primer valor, indefinido
0 && false //devuelve el primer valor, 0


/*
● NOT !: combierte a tipo booleano devolviendo el valor inverso.

El operador lógico NOT no realiza ninguna comparación como lo hacen los operadores AND y OR. Además, se opera en solo un operando.

Se utiliza un símbolo "!" (signo de exclamación) para representar un operador NOT.

Usos del operador NOT
Convertir la expresión en un booleano.
Devolver el valor contrario del booleano obtenido en el último paso.
*/
var spam = 'rinki'; //spam puede ser igual a cualquiera de las cadenas de texto no vacías
var booSpam = !spam;
/*devuelve falso
  porque la string vacía al convertirse en un booleano se devuelve como verdadera y lo contrario se devuelve como falso 
*/

var spam2 = ''; //spam2 es igual a una cadena de texto vacía
var booSpam2 = !spam2;
/*devuelve verdadero
  porque la cadena de texto vacia al convertirse en un booleano se devuelve como falsa y lo contrario se devuelve como verdadero.

  Consejo:

Ambos operadores lógicos devolverán el valor de la última expresión. Por ejemplo:
*/
"gato" && "perro" //devuelve "perro"
"gato" && false //devuelve falso
0 && "gato"  //devuelve 0 (que es un valor falso)

"gato" || "perro" //devuelve "gato"
"gato" || false //devuelve "gato"
0 || "gato" //devuelve "gato"

//Tener en cuenta que && devuelve el primer valor, mientras que || devuelve el segundo valor y vice versa.

/*
● Nullish Coalescing ?? : retorna el primer argumento/variable cuyo valor esta definido. que no sea null/undefined.
 es una lógica operador que devuelve su operando del lado derecho cuando su operando del lado izquierdo esnulooindefinido y, de lo contrario, devuelve su lado izquierdo operando.

Sintaxis
leftExpr ?? rightExpr
*/

const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

//consola:
 "default string"
  0



//EJERCICIOS EN CLASE:

  // OPERADORES LÓGICOS

// OR
 console.log(true || true)      // true
 console.log(false || true)     // true
 console.log(true || false)     // true
 console.log(false || false)    // false


let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

// OR BÚSQUEDA TRUTHY VALUES

console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

/*OR con tipos de datos no booleanos:
empieza de izquierda a derecha y devuelve el valor del truthy values (mas no un true /false)
*/
console.log( null || 0 || 1 );  //esto no delvueleve true/false, devuelve un truthy values
console.log( undefined || null || 0 )  //no tengo ningun truthy values, asi que devuelvo el ultimo valor: 0
console.log( undefined || -2 || 0 ) = -2  //los numeros negativos son truthy values

/*TRUTHY VALUES - (se van encontrando) 
-numeros diferentes de cero 
-cero
-string vacio
-string relleno
-null-underfined
*/

// AND
// obejtivo encontrar false , falsy values.
console.log(true && true)      // true
console.log(false && true)     // false
console.log(true && false)     // false
console.log(false && false)    // false

//en el momento en que se encuentre un FALSE/FALSY VALUES: devuelve un false.

let hour2 = 12;
let minute2 = 30;

if (hour2 == 12 && minute2 == 30) {
  console.log( 'The time is 12:30' );
}

// AND BÚSQUEDA FALSY VALUES

//aplicando a tipo de datos no booleanos 
console.log( 1 && 5 ); // 5 : devuelve el ultimo falsy values
console.log( null && 5 ); // null : lo primero que se encuentra es un falsy values 


// NOT
//utiliza la ! , coge el tipo de valor que tengo lo convierto en booleano y le cambio el valor a ese booleano, covierto true en false 
console.log( !true ); // false
console.log( !0 ); // true    se devuelve en booleano 
console.log( !null ); // true



// NULLISH COALESCING
//retorna el primer valor que este definido, nos ayuda a descartar valores null, underfined

//toda variable definida no inicializada tiene el valor de undefined
let user; //undefined

console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

// si ninguno de los dos es undefined o null, devuelve el primero.

//CONSOLA:
true
true
true
false
//The office is closed.
1
0
true
false
false
false
//The time is 12:30
5
null
false
true
Anonymous

//TRUTHY VALUES: aquel valor que viene de un tipo de dato que no es booleano, que se asemeja a un booleano.

//truthy values, apartir de un 1  seria un true.
//truthy values, apartir de un 0  seria un false.   
//por q? por el valor que tiene.

/*truthy values = 
numero positivo.
una cadena de texto no vacia.Anonymous
un objeto
*/