/*OPERADORES COMPARACION 

Mayor que >: Compara dos valores y devuelve true si el primero es mayor que el segundo. Compara tanto números como cadenas.
Menor que <: Compara dos valores y devuelve true si el primero es mayor que el segundo. Compara tanto números como cadenas.
Mayor o igual que >=: Compara dos valores y devuelve true si el primero es mayor o igual que el segundo. Compara tanto números como cadenas.
Menor o igual que <=: Compara dos valores y devuelve true si el primero es menor o igual que el segundo. Compara tanto números como cadenas.
La operación lógica negación ! invierte el operando, si es true lo hace false y viceversa.
Iguales ==: Compara dos valores y devuelve true si ambos son iguales. Compara tanto números como cadenas.
Idénticos ===: Similar a == pero también compara el tipo de datos de los operandos. Compara dos valores y devuelve true si el primero es mayor o es igual que el segundo. Compara tanto números como cadenas.
*/
//IMPORTANTE: TODAS ESTAS COMPARACIONES DEVUELVEN UN VALOR BOOLEANO 


//Operadores lógicos
var diaHoy = 17;
var diaAyer = 16;
var mesHoy = 10;
var mesAyer = 10;
var mesTexto = "10";
var comparacion;

//mayor que
comparacion = diaHoy > diaAyer;
console.log("Resultado: " + comparacion);  /* devuelve true */

//menor que
comparacion = diaHoy < diaAyer;
console.log("Resultado: " + comparacion);  /* devuelve false */

//mayor o igual
comparacion = mesHoy >= mesAyer;
console.log("Resultado: " + comparacion);  /* devuelve true */

//menor o igual
comparacion = mesHoy <= mesAyer;
console.log("Resultado: " + comparacion);  /* devuelve true */

//iguales
comparacion = mesHoy == mesAyer;
console.log("Resultado: " + comparacion);  /* devuelve true */

//idénticos
comparacion = mesHoy == mesTexto;
console.log("Resultado: " + comparacion)  /* devuelve true */
comparacion = mesHoy === mesTexto;
console.log("Resultado: " + comparacion);  /* devuelve false */



//EJERCICIO CLASE
// NÚMEROS
console.log( 2 > 1 ); // true
console.log( 2 == 1 ); // false
console.log( 2 != 1 ); // true

const result = 5 > 4; // asignar el resultado de la comparación
console.log(result)


// STRINGS
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true


// IGUALDADES ESTRICTAS Y NO ESTRICTAS
console.log(5 == '5') // true
console.log(5 === '5') // false
console.log(5 != '5') // false
console.log(5 !== '5') // true