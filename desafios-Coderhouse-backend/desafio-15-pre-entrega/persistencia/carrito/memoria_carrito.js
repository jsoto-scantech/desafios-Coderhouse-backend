
const listaproductos= require('../productos/memoria_producto')
const persistencia_carrito_txt = require('./persistencia_carrito_txt')

class Carrito{

    constructor (){
        this.carrito_productos=[]
        this.carrito;
        this.id = 1
    }

    guardar(id_producto){
        try {
            let producto_resultado = listaproductos.buscarProductoId(id_producto)
            if(producto_resultado === undefined ){
                            //pequeño error , ya q guarda el error igual en el array 
                return {error:"No hay productos para guardar"};
            }else{
                this.carrito_productos.push(producto_resultado)
                this.carrito =[{
                    id:this.id,
                    timestamp : new Date().toLocaleString(),
                    productos: this.carrito_productos
                }]
              
                persistencia_carrito_txt.guardar(this.carrito)
                
                return this.carrito
            }

        } catch (error) {
            return {error:"existe un error en guardar de memoria_carrito"}

        }
       
    }

    leer(){
        try {
            return (this.carrito_productos.length === 0)? {error:"No hay productos en el carrito"}: this.carrito;
        } catch (error) {
            return {error:"existe un error en leer de memoria_carrito"}
        }
       
    }

    borrar(id_producto){
        let productos = this.carrito
        let eliminar = productos.map(ele => {return ele.productos[id_producto]})
        console.log(eliminar)
    }


}


module.exports = new Carrito()