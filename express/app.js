const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const routerCursosMatematicas = require('./routers/matematicas.js');
const routerCursosProgramacion = require('./routers/programacion.js');
const routerCursosBase = require('./routers/base.js');

//Routers
//Routing
app.use('/api/cursos/programacion', routerCursosProgramacion);
app.use('/api/cursos/matematicas', routerCursosMatematicas);
app.use('/api/cursos', routerCursosBase);


//esta ruta debe quedarse por si ingresamos a la ruta base del servidor
app.get('/', (req,res) => { 
    res.send('Mi primer servidor de node con Express');
});

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}...`);
});