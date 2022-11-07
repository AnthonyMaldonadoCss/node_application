const miUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miUrl)//esto es un objeto con la url "parseada" y podemos acceder a sus parametros
console.log(miUrl.host)
console.log(miUrl.pathname)
console.log(miUrl.search)
console.log(miUrl.searchParams)
//console.log(Object.entries(miUrl.searchParams));
console.log(miUrl.searchParams.get("ordenar")) // retorna null si ese parametro no existe
console.log(miUrl.searchParams.get("nivel"))