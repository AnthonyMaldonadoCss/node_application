const curso = require('./curso.json');
// console.log(...curso.temas);
// console.log(curso.temas);

let infoCurso = {
    "tittle": "aprende Node.js",
    "numVistas": 2,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js",
        "NPM",
        "JSON"
    ],
    "esPublico": true
}

//JSON.stringify

console.log(typeof(infoCurso));
let infoJSON = JSON.stringify(infoCurso);
console.log(typeof(infoJSON));

let toJsonAObject = JSON.parse(infoJSON);
console.log(toJsonAObject);
console.log(typeof toJsonAObject);