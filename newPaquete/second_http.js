const http = require('http');

const PUERTO = 4000;

const servidor = http.createServer((req, res)=>{
    console.log(`===> req(solicitud)`);
    // console.log(req);
    // console.log(req.rawHeaders);
    // console.log(req.httpVersion);
    // console.log(req.url);//la url a la que estamos accediendo
    // console.log(req.method); //metodo que estamos usando
    // console.log(req.headers);

    console.log(`===> res(respuesta)`);
    // console.log(req);
    console.log(res.statusCode); //puede cambiarse
    res.statusCode =  200
    console.log(res.statusCode);

    //setear el header
   let headers ={
    'Content-Type':'application-json',
    'Accept':'aplication-json'
   }
    
    res.setHeader("content-type","application-json");

    
    console.log(res.getHeaders());


    res.end("Response")
})

servidor.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
})