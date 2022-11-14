const express = require('express');
const routerCursosMatematicas = express.Router('');

const { matematicas } = require('../datos/cursos.js')

routerCursosMatematicas.get(`/`,(req, res)=> {
    let seeInfoCursosMatematicas = JSON.stringify(matematicas)
    res.send(seeInfoCursosMatematicas);
})

//parametros URL o de ruta (optimizar)

routerCursosMatematicas.get(`/:tema`, (req,res)=>{
    const tema =  (req.params.tema).toLowerCase();
    console.log(req.params);

    const resultado = matematicas.filter(curso => curso.tema == tema);

    if(resultado.length > 0){
       let resultadoFinal = JSON.stringify(resultado)
       return res.status(200).send(resultadoFinal)
    }
    else {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }

})

module.exports = routerCursosMatematicas;