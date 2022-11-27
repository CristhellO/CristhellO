
//FUNCIONES

//una funcion es un bloque de codigo con una responsabilidad unica y que puede ejecutarse varias Veces.
// PARA USAR FUNCIONES, TENEMOS QUE HACER DOS COSAS:
   // - DECLARARLAS/DEFINIRLAS: 
        function printToConsole(value) {
          console.log('debug:',value);
        }
        
        // - EJECUTARLAS
        printToConsole(5);
        printToConsole('hola!');

   // - CONSOLA
           // 5
           // hola!

//lo que resive una funcion se lllama argumentos.
// ambito o contexto dentro de una funcion es el alcance que tiene a usos de variables, desde dentro de esa fucion se pueden utilizar variables que estan definidas fuera de esa funcion.
//PERO NO ALRREVES: desce fuera no puedo acceder a varable es que esten definidas dentro de una funcion.

//variable con let,cont son variables de bloque son referenciadas dentro del bloque que son definidas. el bloque: {} (yave)

//acceso desde dentro de una funcion a variables que estan fuera.

// mas de 2 -3 argumentos a una fucion es mala practica, mejor pasar el objeto completo, la funcion pueden recibir N argumentos.

//function innerVariable() = no devuelve nada por que no tiene un return y devuelve un undefined.

// FUCNIONES PURAS = FACIL DE TESTEAR (mas mantenible)

// FUNCIONES

//EJEMPLO:
// DEFINICIÓN DE VARIABLES DENTRO DE UNA FUNCIÓN
function innerVariable() {
    let message = "Hello, I'm JavaScript!"; //  variable local a la funcion 
  
    console.log(message);
  }                                          // - VARIABLE DE BLOQUE esas variables VAN A PODER  ser referenciadas dentro del bloque donde son definidas.
                                             // ¿que es el bloque? son la yaves {}
  
  innerVariable(); // Hello, I'm JavaScript!
  
  
  // DEFINICIÓN DE VARIABLES FUERA DE UNA FUNCIÓN
  let userName = 'John';
  
  function OuterVariable() {               // funcion.
    let message = 'Hello, ' + userName;    // varaiable.
    console.log(message);                  // console.
  }
  
  OuterVariable(); // Hello, John
  
  
  // PARÁMETROS
  function printToConsole(value) {
    console.log('debug: ', value);
  }
  
  printToConsole(1);
  printToConsole(2);
  
  
  // RETORNO DE VALORES
  function sum(a, b) {
    return a + b; // cuando el return es ejecutado, la función acaba
  }
  
  const result = sum(5, 3);
  console.log(result)
  
  //CONSOLA
        //Hello, I'm JavaScript!
        // Hello, John
        // debug: 
        // 1
        // debug: 
        // 2
        // 8
  

        
  // EJERCICIO EN CLASE 
  // Escribir una función que, dada una edad, devuelva true si es mayor de edad. En caso contrario, debe devolver false. 
  // En caso contrario, debe devolver false.

  function isAdult(age) {
    let response = false;

    if(age >= 18){
        response = true
    }

    return response;
  }