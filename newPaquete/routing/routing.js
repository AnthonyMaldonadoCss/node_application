const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) =>{

    const { method } = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGet(req,res);
        default:
            console.log(`EL metodo usado no puede ser manejado por el servidor ${method}`)
            res.statusCode = 400 //el servidor no puede interpretar la solicitud
            console.log(res.statusCode())
            res.end('solicitud terminada')
    }

});
 
function manejarSolicitudGet(req,res){
    console.log(req.url)
    const path = req.url
    console.log(path.pathname);
    console.log(path);
    if(path == '/'){
        res.statusCode =  200; //SUCCESS
        res.end('Bienvenidos a mi primer servidor \n y API creados con Node.js')
    }
    else if(path == '/cursos'){
        res.statusCode =  200;
        res.end(JSON.stringify(cursos.infoCursos))
    }
    else if(path == '/cursos/matematicas'){
        res.statusCode =  200;
        res.end(JSON.stringify(cursos.infoCursos.matematicas))
    }
    else if(path == '/cursos/programacion'){
        res.statusCode =  200;
        res.end(JSON.stringify(cursos.infoCursos.programacion))
    }
    else{
        res.statusCode = 400;
        res.end('Ruta no encontrada en el servidor \n Las rutas son las siguientes: \n matematicas \n programacion')
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})