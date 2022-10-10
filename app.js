// const saludos = require('./saludos.js'); // usamos el termino incluir en vez de import

const { despedida, saludar } = require('./saludos.js'); 
//desestructurar por modulos, solo lo que necesitamos

// console.log(saludos.saludar("Anthony"))
// console.log(saludos.despedida("Anthony"))

console.log(saludar("Anthony"))
console.log(despedida("Anthony"))
