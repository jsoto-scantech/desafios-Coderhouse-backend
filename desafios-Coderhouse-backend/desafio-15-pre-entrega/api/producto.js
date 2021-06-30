const persistencia_memoria_producto = require('../persistencia/productos/memoria_producto')

class Producto {

    guardar(producto){
           return persistencia_memoria_producto.guardar(producto)
    }

    leer(){
           return  persistencia_memoria_producto.leer()
    }

    buscarProductoId(id){
           return persistencia_memoria_producto.buscarProductoId(id)
    }
    
    actualizar(id,producto){
           return persistencia_memoria_producto.actualizar(id,producto)
    }

    borrar(id){
           return persistencia_memoria_producto.borrar(id);
    }

}




module.exports = new Producto ()