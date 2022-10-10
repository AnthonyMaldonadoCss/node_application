function saludar (nombre){
    return `Hola ${nombre}`
}

function despedida (nombre){
    return `Adios ${nombre}`
}

module.exports = {
    "saludar" : saludar,
    "despedida" : despedida
}
