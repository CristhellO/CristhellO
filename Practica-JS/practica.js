// 1 Mostrar en formato de tabla todos los alumnos.

const students = [{
    age: 32,
    examScores:[],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores:[],
    gender: 'female',
    name: 'silvia'
  },
  {
     age: 26,
    examScores:[],
    gender: 'female',
    name: 'cecilia'
  }]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];


console.table (students)

// 2 Mostrar por consola la cantidad de alumnos que hay en clase.

let alumnos = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos', 'cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];

console.log(alumnos.length);

// 3 Mostrar por consola todos los nombres de los alumnos.

let estudiantes = ['pepe', 'juan','victor', 'leo', 'francisco', 'carlos', 'cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];

// usando forEach
estudiantes.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}

// 4 Eliminar el último alumno de la clase.

var studenTs = ['pepe', 'juan','victor', 'leo', 'francisco', 'carlos', 'cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
studenTs.pop();
console.log(studenTs);

// 5- Eliminar un alumno aleatoriamente de la clase.
  // elimino primer alumno 'pepe'

var mi_array = ['pepe', 'juan','victor', 'leo', 'francisco', 'carlos', 'cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
mi_array.shift();
console.log(mi_array);

// 6- Mostrar por consola todos los datos de los alumnos que son chicas.

const studentsFemale = [{
  age: 32,
  examScores:[7],
  gender: 'female',
  name: 'cecilia'
},
{
  age: 29,
  examScores:[8],
  gender: 'female',
  name: 'ana'
},
{
   age: 20,
  examScores:[9],
  gender: 'female',
  name: 'luisa'
},
{  age: 34,
  examScores:[10],
  gender: 'female',
  name: 'silvia'
},
{
  age: 30,
  examScores:[6],
  gender: 'female',
  name: 'isabel'
},
{
   age: 25,
  examScores:[7],
  gender: 'female',
  name: 'virginia'
}]


console.log (studentsFemale)

//7- Mostrar por consola el número de chicos y chicas que hay en la clase.

let MaleNames = [
  "pepe",
  "juan",
  "victor",
  "leo",
  "francisco",
  "carlos",
];

let FemaleNames = [
  "cecilia",
  "ana",
  "luisa",
  "silvia",
  "isabel",
  "virginia",
];

console.log (MaleNames.length)

console.log (FemaleNames.length) 

// 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.


const studentS = [
  {name: 'pepe', age: 30, genre: 'male' },
  {name: 'juan', age: 34, genre: 'male' },
  {name: 'cecilia', age: 32, genre: 'female' },
]

const females = studentS.filter(person => person.genre === 'female')

studentS.every(person => person.genre === 'female')

console.log(studentS.every(person => person.genre === 'female'))
console.log(females)
console.log(females.lenght)

// 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.

let StudentsFemale = [{
  age: 32,
  examScores:[7],
  gender: 'female',
  name: 'cecilia'
},
{
  age: 29,
  examScores:[8],
  gender: 'female',
  name: 'ana'
},
{
   age: 20,
  examScores:[9],
  gender: 'female',
  name: 'luisa'
},
{  age: 34,
  examScores:[10],
  gender: 'female',
  name: 'silvia'
},
{
  age: 30,
  examScores:[6],
  gender: 'female',
  name: 'isabel'
},
{
   age: 25,
  examScores:[7],
  gender: 'female',
  name: 'virginia'
}]

//funcion para mostrar alumnos que tengan entre 20 y 25 años
let teen = StudentsFemale.filter(persona => persona.age <= 25)

console.log(teen);  


/* 10- Añadir un alumno nuevo con los siguientes datos:
nombre aleatorio.
edad aleatoria entre 20 y 50 años.
género aleatorio.
listado de calificaciones vacío.
*/
const stUdents = [
  {name: 'pepe', age: 30, genre: 'male', examScores: [], },
  {name: 'juan', age: 34, genre: 'male', examScores: [], },
  {name: 'cecilia', age: 32, genre: 'female',examScores: [], },

]

stUdents.push({name: 'ana', age: 33, genre: 'female',examScores: [], },);

console.log(stUdents);


//11- Mostrar por consola el nombre de la persona más joven de la clase.

let STudentsFemale = [{
  age: 32,
  examScores:[7],
  gender: 'female',
  name: 'cecilia'
},
{
  age: 29,
  examScores:[8],
  gender: 'female',
  name: 'ana'
},
{
   age: 20,
  examScores:[9],
  gender: 'female',
  name: 'luisa'
},
{  age: 34,
  examScores:[10],
  gender: 'female',
  name: 'silvia'
},
{
  age: 30,
  examScores:[6],
  gender: 'female',
  name: 'isabel'
},
{
   age: 25,
  examScores:[7],
  gender: 'female',
  name: 'virginia'
}]

//funcion para mostrar persona mas joven de la clase.
let Teen = STudentsFemale.filter(persona => persona.age <= 20)

console.log(Teen);


// 12- Mostrar por consola la edad media de todos los alumnos de la clase.

function median(students) {
  const sorted = students.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}
/*const students = [{
  age: 32,
  examScores:[],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores:[],
  gender: 'female',
  name: 'silvia'
},
{
   age: 26,
  examScores:[],
  gender: 'female',
  name: 'cecilia'
}]
*/
console.log(median([32, 29, 26]));

// 13- Mostrar por consola la edad media de las chicas de la clase.

function median(studentsFemale) {
  // copia con .slice

  const sorted = studentsFemale.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}
/*let studentsFemale = [{
age: 32,
examScores:[7],
gender: 'female',
name: 'cecilia'
},
{
age: 29,
examScores:[8],
gender: 'female',
name: 'ana'
},
{
 age: 20,
examScores:[9],
gender: 'female',
name: 'luisa'
},
{  age: 34,
examScores:[10],
gender: 'female',
name: 'silvia'
},
{
age: 30,
examScores:[6],
gender: 'female',
name: 'isabel'
},
{
 age: 25,
examScores:[7],
gender: 'female',
name: 'virginia'
}]
*/
console.log(median([32, 29, 20, 34, 30, 25]));

// 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.

const studentsClass = [
  {name: 'pepe', age: 30, genre: 'male', examScores: [7], },
  {name: 'juan', age: 34, genre: 'male', examScores: [8], },
  {name: 'cecilia', age: 32, genre: 'female',examScores: [9], },

]

studentsClass.push({name: 'pepe', age: 30, genre: 'male',examScores: [10], },
              {name: 'juan', age: 34, genre: 'male',examScores: [9], },
              {name: 'cecilia', age: 32, genre: 'female',examScores: [8], },);

console.log(studentsClass);

function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max-min)) +min);
}

console.log("pepe examScores: [10] "+generateRandomInt(0,10));
console.log("juan examScores: [9] "+generateRandomInt(0,10));
console.log("cecilia examScores: [8] "+generateRandomInt(0,10));



// 15- Ordenar el array de alumnos alfabéticamente según su nombre.

let studeNts = ["pepe", "juan","victor", "leo", "francisco", "carlos", "cecilia", "ana", "luisa", "silvia", "isabel", "virginia"];
studeNts.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});

console.log(studeNts);
