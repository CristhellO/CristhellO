
/* Javascript permite ejecutar ciertas instrucciones de forma asíncrona. Esto 
quiere decir que nuestro intérprete de JS no esperará a que esa instrucción 
termine de ejecutarse y continuará ejecutando más líneas de JS.

//es aquel proceso que  no se sabe cuanto tiempo se va a tardar
//cuando esta condicion se cumple, se ejecuta

PETICION DE DATOS A API (externa) - backend

PARA CONTROLAR EL ASINCRONISMO, TENEMOS VARIAS OPCIONES:
 //CALLBACKS = funciones - obseleto     -//las funciones en javascript crean un contexto nuevo 
 //PROMESAS = controlar el procesos asincrono mas comodo y legible.
 // ASYNC / AWAIT = "azucar sintactico
 " (solo se toca el consumidor) (syntaxis liviana  y plana) capita,  necesita  de promesas, hacer que un proceso asincrono se combierta en sincrono Y QUE HE TERMINADO 

PROMESAS:
/*Hay 2 involucrados en una promesa. Podemos identificarlos como 
productor y consumidor.

PRODUCTOR: es quien gestiona un proceso asíncrono mediante una promesa  y es quien toma la desicion si el proceso a terminado bien o no y devolver los datos fuera. 
y quien decide si la operación concluye bien o no.

CONSUMIDOR: es quien reacciona ante el cambio de estado de la promesa, es quien esta consumiendo ese metodo asincrono y tiene que esperar que ese metodo asincrono le avise si ha terminado bien o mal.

Los estados de una promesa son los siguientes
1.PENDING = aun no a terminado el proceso asincrono.
  todo a ido bien entonces la promesa pasa al estado FULFILED.
  a ido mal por cualquier razon la promesa pasa al estado REJECTED.
2.FULFILED <=> RESOLVE()
3.REJETED <=> REJECT()
*/

/*setTimeout: funcion que recibe 2 parametros/argumentos
 1.argumento: es una funcion
 2.argumento: es un numero que son milisegundos que tienen que pasar para que la primer a funcion se ejecute.

 La sintaxis del método setTimeout() es la siguiente:
   setTimeout(function, millisegundos, parametro, parametro, ...);


/*Esta GESTIONANDO un proceso asincrono. 

La promesa se comporta de tal manera que tu le pides algo y ella dice, "ok, yo lo hago pero no se lo que tardo, así que te devuelvo un compromiso" (una instancia de promise)

Entonces la otra parte (consumidor) recibe ese compromiso, esa promise, Y dice "ok, cuando acabe (then) haz algo, y si falla (catch) haz otra cosa"
*/

/*SYNTAX DE PROMESAS - para crear una promesa se utiliza new promise.
Este recibe 1paramatro que es una funcion y  esta a su ves recibe  2parametros/variables(RESOLVE,REJECT) = son 2metodos/funciones que van hacer
 que una promesa cambie del estado PENDING a FULFILLED, o del estado PENDING a REJECTED
*/
const promise = new promise()


//EJERCICIO  EN CLASE
function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  
  console.log('inicio script')
  
  // productor
  function obtenerCitasDisponibles() {
    const time = calculateRandomNumber(1000, 4000);
    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Existe un servidor por ahí, que nos va a decir las citas disponibles.
        const citas = '12:30, 13:30';
        resolve(citas)    //resolved() aqui provoca que se ejecute la funcion .then()
                         // reject() aqui provoca que se ejecute la funcion .catch()
                         // el consumidor ejecuta una funcion u otra en funcion del cambio de estado que sufra la promesa.

        // el servidor no tiene citas disponibles
        // reject();
      }, time);
    })
  
    return promise;
  }
  
  //resolve(): informa al connsumidor que la operacion a ido bien.
  //reject(): informa al connsumidor que la operacion a ido mal.
// y el consumidor se apoya en:
  //.then: cuando la promesa se resuelve
  //.catch: cuando la promesa no se resuelve o se rechaza.

  /* consumidor: desde fuera ejecuta un proceso asincrono y desde dentro de este proceso asincrono esta el productor gestionando todo con una promesa.
   - Crea la Promesa.
   - Retorna la promesa.
   - Cambia el estado a la promesa.
  */

  // obtenerCitasDisponibles()
   .then((citasDisponibles) => { //FUNCION QUE SE EJECUTA CUANDO LA PROMESA SE RESUELVE.
    console.log('las citas disponibles son: ', citasDisponibles);
    })
  .catch(() => { //FUNCION Q SE EJECUTA CUANDO LA PROMESA SE RECHAZA.
    console.log('no hay citas disponibles')
    })
   
  async function main() {
    try {
      const citasDisponibles = await obtenerCitasDisponibles();
      console.log('las citas disponibles son: ', citasDisponibles);
    } catch (error) {
      console.log('no hay citas disponibles')
    }
    
    console.log('fin de script')
  }
  
  main()

  //Siempre que aya un AWAIT debe haber un ASINT. el asint(prefijo ) se utiliza donde este el await.
  // el ASINT va en la definicion de la funcion (se utilizan del lado del consumidor) 

//CONSOLA
  //inicio script
  //las citas disponibles son:  12:30, 13:30
  //fin de script







