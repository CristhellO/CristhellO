/*Operadores aritméticos

Son los que realizan operaciones de tipo aritmético con las variables

Suma +: Se trata de un operador usado para sumar dos valores numéricos o para concatenar cadenas entre sí o números y cadenas.
Resta -: Usado para restar valores numéricos. Puede actuar sobre un único operando numérico cambiándole de signo.
multiplicacion * y cociente /: Realizan las operaciones aritméticas de multiplicar y dividir dos valores.
Resto o módulo porcentaje  %: Calcula el resto de una división. Útil por ejemplo para comprobar si un número es par o impar.
Incremento ++ y decremento --: Se usan para incrementar o decrementar en 1 el valor de una variable. Si el operador se antepone a la variable la operación de incremento o decremento es prioritaria sobre cualquier otra.
Operadores compuestos: Los operadores +, -, *, / pueden asociarse con el operador de asignación (=) para cambiar el valor de una variable numérica incrementándolo, decrementándolo, multiplicándolo o dividiéndolo por un valor. Además, el operador += puede usarse igualmente con variables de tipo string.
exponenciacion: El operador de exponenciación () devuelve el resultado de elevar el primer operando a la potencia del segundo operando. Es equivalente aMath.pow(), excepto que también aceptaBigInts como operandos.**
*/



//Operador suma
var numero1 = 10;
var numero2 = 31;
var texto1 = "Buenos";
var texto2 = " días";
console.log(numero1 + numero2);  /* resultado: 41 */
console.log(texto1 + texto2); /* resultado: Buenos días */
console.log(numero1 + texto2); /* resultado: 10 días */

//Operador resta
var numero1 = 10;
var numero2 = 31;
var resultado = numero1 - numero2;
console.log(resultado);  /* resultado: -21 */
resultado = -resultado;
console.log(resultado); /* resultado: 21 */

//Operador multiplicacion
var numero1 = 50;
var numero2 = 4;
console.log(numero1 * numero2);  /* resultado: 200 */
console.log(numero1 / numero2); /* resultado: 12.5 */

//Operador porcentaje 
var numero1 = 50;
var numero2 = 4;
console.log(numero1 % numero2);  /* resultado: 2 */
var numero1 = 48;
var numero2 = 4;
console.log(numero1 % numero2);  /* resultado: 0 */

//operador exponenciacion 
2 ** 3   // 8
3 ** 2   // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN