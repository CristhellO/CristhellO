
// LOS OBJETOS: en javascript son utilizados para alamacenar diferentes claves con sus correspondientes valores

{
  key1: value,
  key2: value,
}

 
// 2 formas de crearlas () - let user = new object 
// {} - let user = {}
//un objeto dentro de un objeto no pueden tener la misma claves, las claves son unicas dentro de un objeto
//. para acceder a la propiedad dentro de un objeto
// clave - propiedad 
// se pueden crear objetos vacios, o con cientos de propiedades
// borrar propiedad e objeto delete
//los valores de los objetos se pueden Mutear, se pueden cambiar.


// OBJETOS 

let user = {
    name: 'John',
    age: 30,
  }
  
  // acceso a una propiedad del objeto
  console.log(user.name)       //mas convencional 
  console.log(user['name'])
  
  // mutación del valor de propiedades del objeto
  user.name = 'Edu'
  console.log(user.name)
  
  // borrado de una propiedad del objeto
  delete user.name;
  
  // acceso a una propiedad de un objeto que no existe, devolverá undefined
  console.log(user.name)
  
  // comprobar si una propiedad existe dentro de un objeto
  if ('name' in user) {
    // acceso seguro a la propiedad key
    console.log(user.name)
  }
  
  // recorrer TODAS las propiedades de un objeto
  const bigObject = {
    a: 1,
    b: 2,        //propiedades = a,b,c
    c: 3,        // valores = 1,2,3,
    d: 4,
    e: 5,
  }
  
  for (key in bigObject) {
    // haremos una acción por cada una de las propiedades del objeto
    // key es el nombre de cada una de las propiedades del objeto
    console.log(key, bigObject[key])
  }
  
  //CONSOLA:
     //John
     //John
     //Edu
     //undefined
     // a
     // 1
     //b
    //2 
    //c
    //3
   
    //d
    //4
   //e
  //5

/* UN IBJETO DENTRO DE OTRO OBJETO, NO PUEDEN EXISTIR DOS CLAVES CON EL MISMO NOMBRE, LAS CLAVES SON UNICAS DENTRO DE UN OBJETO 
*/
  //propiedades nuevas
  let user = {
    name: 'jhon',
    age: 30,
  }

  user.newkey = true
  // EJERCICIO -> 


  //REFERENCIAS Y COPIAS DE LOS OBJETOS 
  //diferencia en objetos y  los datos primitivos en JS:
     //objetos: se copian por REFERENCIA 

// PASO X VALOR PASO X REFERENCIA 
  //paso por valor = se pasa a la funcion el valor que almacena. es una copia de ese valor.
  // paso por referencia = los objentos en JS se pasan, se copian por referencia.

   //CREAMOS UNA COPIA AL OBJETO INICIAL
  // ( si modificamos esa referencia tambien se estaria modificando el objeto inicial)

//ejemplo:
// cadenas de texto
  let mensaje = 'hello'; // aqui copiamos    // definimos e inicializamos una variable 
  let frase = mensaje;                       // copiando el valor de la propiedad mensaje, en la variable frase, la variable frase toma el valor de mensaje. 
// referencia copia                          // frase y mensaje son totalemnete independientes

// por lo contrario 
  let user = { name: "jhon"}; // objeto user, referencia jhon aqui copiamos una referencia
  let admin = user;   //admin no toma el valor del objeto  name:'jhon'
                      // aqui admin va ser una referencia a la variable user, por que es un objeto.


//¿Y QUE PROBLEMA HAY si copio la referencia?

const obj1 = { name: ‘John’ };
  //definimos objeto1, tiene la clave name y el valor jhon 
const obj2 = obj1;
  // se crea otra variable(obj2) que se asigna a obj1
obj2.name = ‘Edu’
console.log(obj1.name) // Edu
 
 // LAS REFERENCIAS SOLO PASAN CON LOS OBJETOS 
 // SI ES UN DATO PRIMITIVO(NUM,CADENA.TEXT,BOOLEANO,NULL,UNDEFINED) = "AQUI SI COPIAMOS EL VALOR "
    // NO SE COPIA EL VALOR DE LA OTRA VARIABLE, LO Q SE HACE ES  CREAR uNA REFERENCIA A ESA VARIABLE, PQ ES UN OBJ.

  //comparacion entre objetos.
     //Tipos de datos primitivos, no primitivos.
        //primitivos: se comparan por valor 
        const a = 5;
        const b = 5;
        console.log(a === b) // true
  
  // los objetos no se comparan por valor se comparan por referencia.

  const obj1 = { a: 5 };  //obj1,obj2, son independiente C/U, son referencias distintas, si los comparamos van a dar un  false.
  const obj2 = { a: 5 };
  console.log(obj1 === obj2) // false

/*A ver, ¿entonces no podemos copiar un objeto en JS?
Sí, utilizando por ejemplo spread operator:

const obj2 = { …obj1 }; 
defino el obj2 = al obj1(nuevo), con el contenido del obj1.

spread operator: los utilizo con objetos y arrays 
*/

const obj1 = { name: ‘John’ };
const obj2 = { …obj1 }; // spread operator (... = "el contenido de...")  //{...obj1} = objeto nuevo 
obj2.name = ‘Edu’
console.log(obj1.name) // John
console.log(obj2.name) // Edu



//EJERCICIO EN CLASE
// COPIAS DE OBJETOS
// primitivos
let message = "Hello!";
let phrase = message;
console.log(message, phrase)
phrase = 'cambio el valor'
console.log(message, phrase)

// objetos
let user = { name: "John" };
let admin = user;               // admin es una REFERENCIA a la variable user, por lo que si la modificamos, estaremos modificando user realmente.
admin.name = 'Edu';
console.log(user.name)


let user2 = { name: "John" };
let admin2 = { ...user2 };      // admin es un objeto nuevo donde copiamos todo el contenido del objeto user2.
admin2.name = 'Edu';
console.log(user2.name)
console.log(admin2.name)


// COMPARACIÓN ENTRE OBJETOS 

const a = 5;
const b = 5;
console.log(a === b) 	// true

const obj1 = { a: 5 };
const obj2 = { a: 5 };
console.log(obj1 === obj2)  // false

console.log({} === {});


// == : SON VALORES
// === : VALOR Y TIPO 


//CONSOLA:
 //Hello!
 //Hello!
 //Hello!
 //cambio el valor
 //Edu
 //John
 //Edu
 //true
 //false
 //false

// hacer pruebas de comparaciones del ejemplo anterior





/*QUE ES UN OBJETO LITERAL?
Unobjetoes un tipo especial de valor en JavaScript que puede tener conexiones con otros valores.

Unliteral deobjeto es un valor de objeto queliteralmentese escribe en su programa o aplicación.

Un literal de objeto suele consistir en una lista de pares nombre-valor separados por comas (), envueltos dentro de llaves.property:value{}
*/

//Ejemplo de Object Literal:
const dog = {
    name: 'Naya',
    sex: 'female',
    age: 2,
    breed: 'Rottweiler mix'
};

//Cuando digousualmente, quiero decir que un literal de objeto también podría estar vacío, o contener un solo par nombre-valor:

// Empty
const dog = {}

// Single
const dog = {
    name: 'Naya'
}

/*En los ejemplos anteriores, el perro es un valor de objeto (Object Literal), que encapsula información (datos) sobre el perro, mediante el uso de pares nombre-valor (por ejemplo, nombre: 'Naya').

Por lo tanto, puede decir que un literal de objeto es un tipo de valor (valor de objeto) en JavaScript que contiene referencias a otros valores (pares nombre-valor).

Es importante saber que las propiedades dentro de los objetosvivendentro de los objetos y tienen un ámbito dentro de ellos, pero losvaloresno lo son.

En el ejemplo anterior,,,,, se consideran propiedades del objeto y no se pueden cambiar desde el exterior.namesexagebreeddog

Sin embargo, losvalores, por ejemplo&don't live inside the object (no están definidos), solo son referidos por las propiedades del objeto.Nayafemale
*/