// const saludos = require('./saludos.js'); // usamos el termino incluir en vez de import

const { despedida, saludar } = require('./saludos.js'); 
//desestructurar por modulos, solo lo que necesitamos

const os = require('os');

// console.log(saludos.saludar("Anthony"))
// console.log(saludos.despedida("Anthony"))

// console.log(saludar("Anthony"))
// console.log(despedida("Anthony"))

//Módulo build-in Console.log

// console.log('Hola mundo');
// console.warn('Hola mundo');
// console.error('Ocurrio un error');
// console.error(new Error('Ocurrio un error'));

/**
 * Modulo process
 */
// console.log(process);
// console.log(process.uptime());
// console.log(process.env);
//tambien podriamos acceder desde aquí
// console.log(process.argv); 
//poder acceder a los parametros enviados a travez del llamado a la ejecución 
//podría servir para separar procesos entre localhost y produccion if process.argv.includes('local')

// if(process.argv.includes('local')){
    // console.log('Estamos en local')
// }else {
    // console.log('Estamos en produccion')
// }

// console.log(process.memoryUsage())
/**
 * Modulo OS Operating System
 */

// console.log(os);
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.userInfo());

/**
 * Modulo Timers
 */

const base = 2000

const mostrarTema = function(tema){
   console.log( `Estoy aprendiendo ${tema}`)
}

setTimeout(mostrarTema, base, 'Node')
setTimeout(saludar, base + 1000, 'Anthony')

const sumar = function (a,b){
    console.log(a+b);
}

setTimeout(sumar, 2000, 6,7)

const restar = function(a,b){
    console.log(a-b)
}
console.log("linea antes");

//setImmediate(nombreFuncion, arg1, argN)
setImmediate(restar,5,10)
// se ejecuta despues del codigo sincrono programado
console.log("linea despues");

// setInterval(mostrarTema, 5000, 'NODE')
setInterval(sumar, 1500,2,3 )