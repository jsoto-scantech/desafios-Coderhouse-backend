const persistencia_memoria_carrito= require('../persistencia/carrito/memoria_carrito')

class Carrito {

    constructor(){
    }

    guardar(id_producto){
        return persistencia_memoria_carrito.guardar(id_producto)
    }

    leer(){
        return persistencia_memoria_carrito.leer();
    }   

    borrar(id){
        return persistencia_memoria_carrito.borrar(id)
    }

}

module.exports = new Carrito()