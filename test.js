import readline from 'readline';

function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
});

function isInt(str){
    // returns a boolean
    return /^[0-9]+$/.test(str)
  }

const isInt2 = (str) => {
    const integer = parseInt(str);
    if (Number.isNaN(integer)) {
        return false 
    } else {
        return true
    }
}

// productor
function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => { 
        rl.question('Introduce el número: ', (num) => {
            rl.pause();
            if (isInt(num)) {
                num = Number.parseInt(num);
                resolve(num);
                console.log(resolve(num))
            } else {
                reject('Has de introducir un número');
            }
        })
    });

    return promise;
}

async function isSecretNumber() {
    const MAX_TRIES = 5;
    const secretNumber = calculateRandomNumber(0, 100);
    let numberFromConsole;
    let counter = 0;
    
    do {
        try {
            counter++;
            numberFromConsole = await getNumberFromConsole()
        } catch (error) {
            console.log(error);
            process.exit(0);
        }
        
        if (numberFromConsole === secretNumber) {
            rl.close()
            console.log('Enhorabuena maquinote. Has acertado')
        } else {
            if (numberFromConsole < secretNumber) {
                console.log('El número secreto es mayor. Prueba otra vez.')
            } else {
                console.log(' El número secreto es menor. Inténtalo otra vez!')
            }
        }
    }  while (numberFromConsole !== secretNumber && counter < MAX_TRIES);
}

playGame();