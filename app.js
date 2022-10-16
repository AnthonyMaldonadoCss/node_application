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
 * Módulo Timers
 * setTimeout => esperar el tiempo programado para ejecutar la función
 */

// const base = 2000

// const mostrarTema = function(tema){
//    console.log( `Estoy aprendiendo ${tema}`)
// }

// setTimeout(mostrarTema, base, 'Node')
// setTimeout(saludar, base + 1000, 'Anthony')

// const sumar = function (a,b){
    // console.log(a+b);
// }

// setTimeout(sumar, 2000, 6,7)

// const restar = function(a,b){
    // console.log(a-b)
// }
// console.log("linea antes");

//setImmediate(nombreFuncion, arg1, argN)
// setImmediate(restar,5,10)
// se ejecuta despues del codigo sincrono programado
// console.log("linea despues");

// setInterval(mostrarTema, 5000, 'NODE')
// setInterval(sumar, 1500,2,3 )


/**
 * Módulo Fs
 */


//leer archivos
const fs = require('fs');
// fs.readFile('inde.html','utf8',(err,resp)=>{
//   if(err){
    // //   console.log(err);
    //   throw err;
    // //   la diferencia radica en que el throw va a detener la ejecucion del código 
//   } 
//   console.log(resp);

// })


//renombrar archivos
// fs.rename('index.html','main.html',(err)=>{
    // if(err){
        // throw err;
    // }
    // console.log("nombre cambiado exitosamente");
// })

//agregar contenido al final del archivo
// fs.appendFile('main.html','<p>Hola</p>',(err)=>{
    // if(err){
        // throw err;
    // }
    // console.log('Archivo actualizado');
// })

//Reemplazar todo el conteido del archivo
// fs.writeFile('main.html','<p>Contenido nuevo</p>',(err)=>{
    // if(err){
        // throw err;
    // }
    // console.log('contenido actualizado exitosamente');
// })


// Eliminar el archivo
// fs.unlink('main.html',(err)=>{
//     if(err) throw err;
//     console.log("Archivo eliminado")
// })

/**
 * utilizando las versiones sincronas de estos metodos
 */

// const readFile = fs.readFileSync('main.html','utf-8')
// console.log(readFile);

//los metodos sincronos no manejan funciones de callbacks
//ya que podemos almacenar el error en una variable

/**
 * NPM Y NODE.JS
 */