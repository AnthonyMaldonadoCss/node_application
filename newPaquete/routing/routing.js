const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) =>{

    const { method } = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res);
            break;
        case 'POST':
            return manejarSolicitudPOST(req,res);
            break;
        case 'PUT':
            return manejarSolicitudPUT(req,res);
            break;
        case 'DELETE':
            return manejarSolicitudDELETE(req,res);
            break;
        default:
            console.log(`EL metodo usado no puede ser manejado por el servidor ${method}`)
            res.statusCode = 501 //metodo no implementado
            console.log(res.statusCode)
            res.end(`EL metodo usado no puede ser manejado por el servidor ${method}`)
    }

});
 
function manejarSolicitudGET(req,res){
    console.log(req.url)
    const path = req.url
    console.log(path);
    if(path == '/'){
        res.statusCode =  200; //SUCCESS
        res.end('Bienvenidos a mi primer servidor \n y API creados con Node.js')
    }
    else if(path == '/cursos'){
        res.statusCode =  200; //este codigo esta por defecto, no es necesario indicarlo
        return res.end(JSON.stringify(cursos.infoCursos))
    }
    else if(path == '/cursos/matematicas'){
        res.statusCode =  200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas))
    }
    else if(path == '/cursos/programacion'){
        res.statusCode =  200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }
    else {
        res.statusCode = 404; //recurso no encontrado
        return res.end('Ruta no encontrada en el servidor \n Las rutas son las siguientes: \n matematicas \n programacion')
    }   
}
function manejarSolicitudPOST(req,res){
    const path = req.url;

    if(path === '/cursos/programacion'){
        res.statusCode =  200;
        // console.log(req.data);
        res.end(`Se recibio una solicitud POST para actualizar los cursos`)
    }
}

function manejarSolicitudPUT(req,res){
    const path = req.url;
    console.log(path)

    if(path === '/cursos/matematicas/_id'){
        res.statusCode =  200;
        // console.log(req.data);
        res.end(`Se recibio una solicitud PUT`)
    }
}

function manejarSolicitudDELETE(req,res){
    const path = req.url;
    console.log(path)

    if(path === '/cursos/matematicas/_id'){
        res.statusCode =  200;
        // console.log(req.data);
        res.end(`Se recibio una solicitud DELETE`)
    }
}
const PUERTO = 3000;

servidor.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})