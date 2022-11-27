// las instrucciones de cómo funciona el juego están en el fichero README.md

// DONE - Cálculo del número secreto.
// - Pedir número al usuario.
// - Comprobar si el número es el número secreto:
//   - Si lo es, tenemos ganador!
//   - Si no lo es, damos la pista
import readline from 'readline';

function calculateRandomNumber(min, max){                                     //math: es un obj global que ofrece JS. (son utilidades)                                                               //math.random: calcula un numero aleatorio.
  const randomNumber = Math.floor(Math.random() * (max - min +   1)) + min;    //math.floor: redondea el numero. 
 return randomNumber;
}

const secretNumber = calculateRandomNumber(0, 100);

 console.log(secretNumber);                            

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// productor
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    // nos permite hacer una pregunta por consola al usuario. Ojo que es un proceso asíncrono.
    rl.question('Introduce el número: ', (num) => {
      rl.pause();
      resolve(num)
      // si el usuario mete un número, resolvemos la promesa con ese número.
      // si el usuario mete una letra, debemos rechazar/rejectear la promesa.
    })
  })

  return promise;
}

// consumidor
const numberFromConsole = await getNumberFromConsole()   //este await es lo que devuelve la promesa resuelta.(resolve num)

// le decimos a la utilidad readline que no queremos pedir más números por consola.
rl.close()

console.log(numberFromConsole)

