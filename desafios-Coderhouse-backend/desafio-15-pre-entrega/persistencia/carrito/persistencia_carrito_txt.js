const listaproductos= require('../productos/memoria_producto')

class Persistencia_carrito_txt{
    #fs = require('fs')
    constructor (){
    
    }

    async guardar(carrito){  

        await this.#fs.promises.writeFile(__dirname + `/carrito.txt`,JSON.stringify(carrito,null,'\t'))

    } 
    
    leer(){
        
        try {
            const data = this.#fs.readFileSync(__dirname + `/carrito.txt`,'utf-8')
            return  JSON.parse(data)
        } catch (error) {
            throw new Error("hay un problema al leer")
        }

    }
    


}


module.exports = new Persistencia_carrito_txt()