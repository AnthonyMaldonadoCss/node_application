const express = require('express');
const routersCursosProgramacion = express.Router();

const { programacion } = require('../datos/cursos.js')

routersCursosProgramacion.get('/',(req, res)=> { //indicando que es la raiz
    const lenguaje =  req.params;
    console.log(lenguaje);
    let seeInfoCursosProgramacion = JSON.stringify(programacion)
    res.send(seeInfoCursosProgramacion);
})

routersCursosProgramacion.get(`/:lenguaje`, (req,res)=>{ 
    const lenguaje =  (req.params.lenguaje).toLowerCase();
    
    //parametros query
    console.log(req.query);

    let resultado = programacion.filter(curso => curso.tema == lenguaje);
    
   
    
    if(resultado.length > 0){
       
        if(req.query.ordenar == 'vistas'){
            resultado = resultado.sort((a,b)=> a.vistas - b.vistas); //ascendente
        }
       
        let resultadoFinal = JSON.stringify(resultado)
       return res.status(200).send(resultadoFinal)
    }
    else {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

})


routersCursosProgramacion.get(`:lenguaje/:nivel`, (req,res)=>{
    const {lenguaje, nivel} =  req.params
    console.log(req.params);
    console.log(lenguaje,nivel);

    const resultado = programacion.filter(curso => curso.tema == lenguaje && curso.nivel == nivel);

    if(resultado.length > 0){
       let resultadoFinal = JSON.stringify(resultado)
       return res.status(200).send(resultadoFinal)
    }
    else {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} del nivel ${nivel}`);
    }

})


module.exports = routersCursosProgramacion;