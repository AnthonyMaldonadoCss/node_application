const EventEmitter = require('events');
// console.log(EventEmitter);

const emisorProductos =  new EventEmitter(); //nuevo objeto que nos va a permitir emitir eventos

emisorProductos.on('compra',(params)=>{
    console.log("Se realizo una compra");
    console.log(params);
});

let objetoComprado = {"producto": "zapatos","cantidad":1}

// emisorProductos.emit('compra', objetoComprado);
// esto podria ser un evento llegado del front por medio de una API 
// Si me llega un evento compra, yo emito la función

/**
 * PROMESAS
 */

// const promesaCumplida = false;
// const miPromesa =  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(promesaCumplida){
//             resolve("PROMESA CUMPLIDA!");
//         } else {
//             reject("Promesa rechazada :(")
//         }
//     },3000);
// });




const manejarPromesaCumplida = (valor)=>{
    console.log(valor);
}

const manejarPromesaRechazada = (valor) =>{
    console.log(valor);
}

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada) 
// cuando se cumple la promesa es el primer parametro
// segundo parametro cuando es rechazado


// const estatusPedido = () =>{
    // const estatus = Math.random() < 0.8;
    // console.log(estatus);
    // return estatus
// }

// const miPedidoPizza = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
        // if(estatusPedido()){
            // resolve("PEDIDO EXITOSO, SU PIZZA ESTA EN CAMINO")
        // }else{
            // reject("OCURRIO UN ERROR, INTENTE NUEVAMENTE")
        // }
    // },3000)
// })


// miPedidoPizza
// .then((mensajeConfirmacion)=>{
//     console.log(mensajeConfirmacion);
// })
// .then(null,(mensajeRechazo)=>{
//     console.log(mensajeRechazo);
// })

//Method Chaining
// miPedidoPizza
    // .then((mensajeConfirmacion)=>{
        // console.log(mensajeConfirmacion);
    // })
    // .catch((mensajeRechazo)=>{
        // console.log(mensajeRechazo);
    // })

let producto = {
    "name": "Taza de café",
    "cantidad": 10,
    "type": "taza"
}

function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto.name}, por la cantidad de ${producto.cantidad}`);
        setTimeout(() => {
            if(producto.type === "taza"){
                resolve("Ordenando una taza")
            }else {
                reject("No se ha podido completar el pedido, no esta disponible el producto")
            }
        }, 2000);
    });
}

function procesarPedido(respuesta){
    return new Promise((resolve, reject) => {
        console.log("Procesando respuesta")
        console.log(`La respuesta fue "${respuesta}"`);
        setTimeout(() => {
            resolve("Pedido procesado, gracias")           
        }, 4000);
    });
}
// ordenarProducto(producto)
//     .then(respuesta =>{
//         console.log(`respuesta recibida ${respuesta}`);
//         return procesarPedido(respuesta) //esoy llamando a otra promesa
//     })
//     .then(respuestaProcesada=>{ //encadeno nuevamente
//         console.log(`Respuesta procesada`);
//         console.log(respuestaProcesada);
//     })
//     .catch(err =>{
//         console.log(err);
//     })

/**
 * equivalente al código anterior
 */

const realizarPedido = async function (producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada);
    } catch (err) {
        console.log(err);
        // throw(err)
    }
}

realizarPedido(producto)