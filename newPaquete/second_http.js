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
    console.log(req);


    res.end("Request")
})

servidor.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
})