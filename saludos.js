function saludar (nombre){
  console.log(`Hola ${nombre}`)
}

function despedida (nombre){
    return `Adios ${nombre}`
}

module.exports = {
    "saludar" : saludar,
    "despedida" : despedida
}
