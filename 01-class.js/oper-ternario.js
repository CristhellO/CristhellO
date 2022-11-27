/* En el momento en el que necesitemos asignar un valor a una variable 
dependiendo de una condición, es muy probable que el operador ternario ‘?’ 
nos facilite la labor.
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
(ES COMO IF RESUMIDO )

SINTAXIS 
condición ? expr1 : expr2

PARAMETROS
condición
Una expresión que se evalúa como true o false.

expr1, expr2
Expresión con valores de algún tipo.





*/ 
//EJEMPLO DE CLASE 
 const age = 10
 let isAdult;

 if(age >= 18) {
    isAdult = true;
 } else {
    isAdult = false;
 }
 // utilizando el valor ternario:

 isAdult = condicion ?  valorAfirmativo : valorNegativo 
 isAdult  = age >= 18 ? true : false;

 