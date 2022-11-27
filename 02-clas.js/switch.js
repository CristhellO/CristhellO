
/* La sentencia switch nos va a permitir ejecutar distintos bloques de código 
según el valor de una variable.

La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

SYNTAXIS: 
switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;]
}

expresión:
Es una expresión que es comparada con el valor de cada instancia case.

case valorN:
Una instancia case valorN es usada para ser comparada con la expresión. Si la expresión coincide con el valorN, las declaraciones dentro de la instancia case se ejecutan hasta que se encuentre el final de la declaración switch o hasta encontrar una interrupción break.

default:
Una instancia default, cuando es declarada, es ejecutada si el valor de la expresión no coincide con cualquiera de las otras instancias case valorN.

DESCRIPCION:
Si ocurre una coincidencia, el programa ejecuta las declaraciones asociadas correspondientes. Si la expresión coincide con múltiples entradas, la primera será la seleccionada, incluso si las mayúsculas son tenidas en cuenta.

El programa primero busca la primer instacia case cuya expresión se evalúa con el mismo valor de la expresión de entrada (usando comparación estricta (en-US), ===) y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas. Si no se encuentra una cláusula de case coincidente, el programa busca la cláusula default opcional, y si se encuentra, transfiere el control a esa instancia, ejecutando las declaraciones asociadas. Si no se encuentra una instancia default el programa continúa la ejecución en la instrucción siguiente al final del switch. Por convención, la instancia default es la última cláusula, pero no tiene que ser así.

La declaración break es opcional y está asociada con cada etiqueta de case y asegura que el programa salga del switch una vez que se ejecute la instrucción coincidente y continúe la ejecución en la instrucción siguiente. Si se omite el break el programa continúa la ejecución en la siguiente instrucción en la declaración de switch

EJEMPLO:
Usando switch
En el siguiente ejemplo, si expresión se resuelve a "Platanos", el algoritmo compara el valor con el case "Platanos" y ejecuta la declaración asociada. Cuando se encuentra un break, el programa sale del condicional switch y ejecuta la declaración que lo procede. Si se omite el break, el case "Cerezas" también es ejecutado.
*/
switch (expr) {
  case 'Naranjas':
    console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
  case 'Manzanas':
    console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
  case 'Platanos':
    console.log('El kilogramo de platanos cuesta $0.48.');
    break;
  case 'Cerezas':
    console.log('El kilogramo de cerezas cuesta $3.00.');
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
  default:
    console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
}

console.log("¿Hay algo más que te quisiera consultar?");

/*¿QUE PASA SI OLVIDO UN BREAK ?
Si olvidas un break, el script se ejecutará desde donde se cumple la condición y ejecutará el siguiente case independientemente si esta condición se cumple o no. Ver el siguiente ejemplo:
*/

var foo = 0;
switch (foo) {
  case -1:
    console.log('1 negativo');
    break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0)
    // NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log(1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

/*¿Puedo usar un <default> entre condiciones?
Sí, ¡es posible! JavaScript retornará a la instancia default en caso de no encontrar una coincidencia:
*/
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
  default:
    console.log('default')
    // fall-through
  case 1:
    console.log('1');
}
/*Al estar el case 1: a continuación de default, y al no haber un break de por medio, veremos que la declaración del case 1: será ejecutada, apareciendo el resultado 1 en el log de consola.
*/

//EL BREAK lo que hace es salir de la ejecucuion de switch , el break tiene que estar dentro de un case 



//EJEMPLO EN CLASE 
// Escribe un switch que dada la nota numérica de un examen, imprima por
// consola si es un suspenso(<5), suficiente(5), bien(6), notable(7-8), sobresaliente(9) o matrícula(10).

// SWITCH

const a = 2 + 2;

switch (a) {
  case 3:
    console.log('3');
    break;
  case 4:
    console.log('entrará aquí porque el valor es igual');
    break;
  case 5:
    console.log('5');
    break;
  default:
    console.log("ninguno de los anteriores" );
}


// EJERCICIO EN CLASE 

const note = 40;

switch(note) {
  case 0:                          // ESTA FORMA SIRVE PARA ANIDAR DIFERENTES CASOS DEL CASE
  case 1:                          //UNA VES EVALUAMOS (NOTE)
  case 2:                               //CASE: PERMITE CONCATENAR CASOS PARA NO REPETIR EL MISMO BLOQUE DE CODIGO 
  case 3:
  case 4:
    console.log('suspenso')        // SE EJECUTA ESTE TROZO DE CODIGO 
    break;
  case 5:
    console.log('suficiente')
    break;
  case 6:
    console.log('bien')
    break;
  case 7:
  case 8:
    console.log('notable')
    break;
  case 9:
    console.log('sobresaliente')
    break;
  case 10:
    console.log('mdh')
    break;
  default:
    console.log('nota no valida')
    break;
}

// EL CASE FUNCIONA COMO UN TRIPE IGUAL, COMO UNA COMPARACION 

//defaul bloque de codigo que se va ejecutatr en un caso no comtemplado 