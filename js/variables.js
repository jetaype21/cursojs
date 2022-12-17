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

//! VAR vs LET
/* En JavaScript, las variables pueden contener cualquier tipo de valor como:
--> números
--> cadenas de texto
--> objetos
--> funciones, etc. 

tener en cuenta que es necesario declarar las variables antes de usarlas.
*/

let estado = true
let juguete = "leopardo";

if(estado == true) {
  let juguete = "loro"
  console.log(juguete) //loro
}

console.log(juguete) //leopardo


//! CONST
/* se utiliza para declarar variables que no pueden ser reasignadas después de ser asignadas por primera vez.
 */

// let estado = true;
const PI = 3.14;

if(estado == true) {
  const PI = 3.1489473837
  console.log(PI)
}

console.log(PI);
// 0 1 2 3
const juguetes = [];
juguetes[0] = "perro"


console.log(juguetes);

