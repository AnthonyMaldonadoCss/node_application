let infoCursos = {
    'programacion':[
    {
        _id:1,
        titulo:'Aprende Python',
        tema: 'python',
        vistas: 30000,
        nivel: 'basico'
    },
    {
        _id:1,
        titulo:'Python Intermedio',
        tema: 'python',
        vistas: 15000,
        nivel: 'intermedio'
    },
    {
        _id:3,
        titulo:'Aprende JavaScript',
        tema: 'javascript',
        vistas: 30000,
        nivel: 'basico'
    }
],
    'matematicas':[
        {
            _id:1,
            titulo:'Aprende Calculo',
            tema: 'calculo',
            vistas: 3000,
            nivel: 'basico'
        },
        {
            _id:2,
            titulo:'Aprende Algebra',
            tema: 'algebra',
            vistas: 400000,
            nivel: 'intermedio'
        },
        {
            _id:3,
            titulo:'Aprende estadistica',
            tema: 'estadistica',
            vistas: 15000,
            nivel: 'avanzado'
        }

    ]
}

module.exports = {
    matematicas: infoCursos.matematicas,
    programacion: infoCursos.programacion,
    infoCursos: infoCursos,
}