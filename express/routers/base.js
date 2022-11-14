const express = require('express');
const routerCursosBase = express.Router();

const { infoCursos } = require('../datos/cursos.js');

routerCursosBase.get('/',(req,res)=>{
    let seeInfoCursos = JSON.stringify(infoCursos)
    res.send(seeInfoCursos);
});

module.exports = routerCursosBase;