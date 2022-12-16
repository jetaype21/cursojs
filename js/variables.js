//! REGLAS PARA NOMBRAR VARIABLES
/*
CORRECTAS
--> nombreVariable
--> NombreVariable
--> _nombreVariable

INCORRECTAS
--> 1nombreVariable
--> nombre variable
--> Number
*/

//! VAR
/* El var declara una variable de ámbito de función o de ámbito global y, opcionalmente, la inicializa en un valor. */

var juguete = "oso";

var juguete = "gato";
if (typeof juguete === "string") {
  var juguete = "perro"
  console.log(juguete) //perro
} 
console.log(juguete) //perro


//! LET
/* La let declaración declara una variable local con ámbito de bloque y, opcionalmente, la inicializa en un valor. */

let edad = 18;
edad = 19;

if (typeof edad == "number" ) {
  let edad = 56;
  console.log(edad); //56
}


console.log(edad) //19


//! CONST:
/* Las constantes tienen un alcance de bloque, al igual que las variables declaradas con la palabra clave let. 

El valor de una constante no se puede cambiar a través de la reasignación (es decir, mediante el uso del operador de asignación) y no se puede volver a declarar (es decir, a través de una declaración de variable). 

Sin embargo, si una constante es un objeto o una matriz, sus propiedades o elementos se pueden actualizar o eliminar.
 */

const DNI = 2323;
const PI = 3.1416
console.log(DNI)
console.log(PI)


const miObjeto = {
  nombre: "taypedev",
  edad: 22
}

miObjeto.nombre = "taype"
console.log(miObjeto.nombre)