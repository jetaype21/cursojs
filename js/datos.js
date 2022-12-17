//! Tipos de datos (string, number, bolean)

let nombre = "taype"
let nombreCompleto = `mi nombre es: ${nombre.toLocaleUpperCase()}`
// ALTGR + } + ESPACIO = ``
// console.log( nombreCompleto);

let numero = 23
let numeroTexto = "45"
numeroTexto =  parseInt(numeroTexto)

// console.log(numero);
// console.log(numeroTexto + 45);


let estado = true

estado 
  ? console.log("activado") 
  : console.log("Desactivado")