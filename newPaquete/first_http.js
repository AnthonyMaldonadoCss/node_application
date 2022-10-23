const http = require('http');

//crear servidor
//cada vez que reciba una solicitud va a ejecutar la funcion definida 
const servidor = http.createServer((req,res)=>{ //request y response
    //envia el resultado al cliente
    res.end("<h1>Hola mundo con Node.js</h1>");
});

const PUERTO = 4000

//comienza a escuchar
servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}`);
});