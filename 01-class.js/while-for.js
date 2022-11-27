
/*Frecuentemente necesitaremos realizar operaciones de forma repetida, o 
recorrer una lista para hacer ciertas acciones. Para ello utilizaremos while, 
do while y for.

● While: mientras una condición sea verdadera, ejecutaremos un bloque 
de código.

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

SINTAXIS
while (condicion)
  sentencia

CONDICION
Una expresión que se evalúa antes de cada paso del bucle. Si esta condición se evalúa como verdadera, se ejecuta sentencia. Cuando la condición se evalúa como false, la ejecución continúa con la sentencia posterior al bucle while.

SENTENCIA
Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia block ({ ... }) para agrupar esas sentencias.

El siguiente bucle while itera mientras n es menor que tres.
*/
n = 0;
x = 0;
while (n < 3) {
  n ++;
  x += n;
}
while (condition) {
    // código
    // llamado "cuerpo del bucle"
  }
  //Mientras la condición condition sea verdadera, el código del cuerpo del bucle será ejecutado.

//Por ejemplo, el bucle debajo imprime i mientras se cumpla i < 3:

let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
  alert( i );
  i++;
}

/*Las llaves no son requeridas para un cuerpo de una sola línea
Si el cuerpo del bucle tiene una sola sentencia, podemos omitir las llaves {…}:
*/
let i = 3;
while (i) alert(i--);

/*
Cada interación, el bucle incrementa n y la añade a x. Por lo tanto, x y n toman los siguientes valores:

Después del primer pase: n = 1 y x = 1
Después del segundo pase: n = 2 y x = 3
Después del tercer pase: n = 3 y x = 6

Después de completar el tercer pase, la condición n < 3 no será verdadera más tiempo, por lo que el bucle terminará.

//NOTA: Tener cuidado con el while y el do-while con los bucles infinitos (no se cumpliria la funcion)
//WHILE: primero pregunta y luego ejecuta 


● Do while: ejecutaremos un bloque de código y seguiremos ejecutando 
dicho código mientras una condición sea verdadera.
//DO-WHILE: primero ejecuta, luego pregunta y sigue.

La comprobación de la condición puede ser movida debajo del cuerpo del bucle usando la sintaxis do..while:
*/

do {
  // cuerpo del bucle
} while (condition);

//El bucle primero ejecuta el cuerpo, luego comprueba la condición, y, mientras sea un valor verdadero, la ejecuta una y otra vez.

//Por ejemplo:
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

//Esta sintaxis solo debe ser usada cuando quieres que el cuerpo del bucle sea ejecutado al menos una vez sin importar que la condición sea verdadera. Usualmente, se prefiere la otra forma: while(…) {…}.



/*
● for: repetiremos bloques de código a partir de un índice, una condición 
y un incremento del índice

El bucle for es más complejo, pero también el más usado.

Se ve así:

for (begin; condition; step) { // (comienzo, condición, paso)
  // ... cuerpo del bucle ...

  Aprendamos el significado de cada parte con un ejemplo. El bucle debajo corre alert(i) para i desde 0 hasta (pero no incluyendo) 3:

for (let i = 0; i < 3; i++) { // muestra 0, luego 1, luego 2
  alert(i);
}
Vamos a examinar la declaración for parte por parte:

parte		
comienzo	let i = 0	Se ejecuta una vez al comienzo del bucle.
condición	i < 3	Comprobada antes de cada iteración del bucle. Si es falsa, el bucle finaliza.
cuerpo	alert(i)	Se ejecuta una y otra vez mientras la condición sea verdadera.
paso	i++	Se ejecuta después del cuerpo en cada iteración.
El algoritmo general del bucle funciona de esta forma:

Se ejecuta comenzar
→ (si condición → ejecutar cuerpo y ejecutar paso)
→ (si condición → ejecutar cuerpo y ejecutar paso)
→ (si condición → ejecutar cuerpo y ejecutar paso)
→ ...
Si eres nuevo en bucles, te podría ayudar regresar al ejemplo y reproducir cómo se ejecuta paso por paso en una pedazo de papel.

Esto es lo que sucede exactamente en nuestro caso:
*/

// for (let i = 0; i < 3; i++) alert(i)

// se ejecuta comenzar
let i = 0
// si condición → ejecutar cuerpo y ejecutar paso
if (i < 3) { alert(i); i++ }
// si condición → ejecutar cuerpo y ejecutar paso
if (i < 3) { alert(i); i++ }
// si condición → ejecutar cuerpo y ejecutar paso
if (i < 3) { alert(i); i++ }
// ...finaliza, porque ahora i == 3

// Aquí, la variable “counter” i es declarada en el bucle. Esto es llamado una declaración de variable “en línea”. Dichas variables son visibles solo dentro del bucle.

for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }
  alert(i); // error, no existe dicha variable

  //En vez de definir una variable, podemos usar una que ya exista:
let i = 0;

for (i = 0; i < 3; i++) { // usa una variable existente
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, porque fue declarada fuera del bucle

/*Cualquier parte de for puede ser omitida.

Por ejemplo, podemos quitar comienzo si no necesitamos realizar nada al inicio del bucle.

Como aquí:
*/
let i = 0; // Ya tenemos i declarada y asignada

for (; i < 3; i++) { // no hay necesidad de "comenzar"
  alert( i ); // 0, 1, 2
}

//También podemos eliminar la parte paso:
let i = 0;

for (; i < 3;) {
  alert( i++ );
}

//Esto hace al bucle idéntico a while (i < 3).

//En realidad podemos eliminar todo, creando un bucle infinito:
for (;;) {
    // se repite sin limites
  }

  //Por favor, nota que los dos punto y coma ; del for deben estar presentes. De otra manera, habría un error de sintaxis.




  //EJERCICIOS ES CLASE
  // WHILE

let indexWhile = 0;

while(indexWhile <= 5 ) {
  console.log(indexWhile);
  indexWhile++;
}


// DO WHILE 

// let response = null;

// do {
//   response = prompt('Introduce la letra a: ')
// } while(response !== 'a')

// FOR

for (let indexFor = 0; indexFor <= 5; indexFor++) {
  console.log(indexFor)
}


// Ejercicio

// Utiliza un bucle for para imprimir por consola todos los números pares entre el 2 y el 10 (hay 2 soluciones posibles =) )

// 11 vueltas
for(let index = 0; index <= 10; index++) {
  if (index % 2 == 0) {
    consola.log(index)
  }
}

// con el WHILE 
// 10  vueltas
let indexWhile = 1;
while(indexWhile <= 10) {
   if (indexWhile % 2 == 0) {
      console.log(indexWhile)
}
   indexWhile++; 

}
// 5 vueltas
for (let index = 2; index <= 10; index+=2) {
    console.log(index)
}

