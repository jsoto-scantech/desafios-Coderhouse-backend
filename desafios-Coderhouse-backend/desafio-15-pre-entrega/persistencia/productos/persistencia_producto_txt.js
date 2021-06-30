
const memoria_producto = require('./memoria_producto')

class Persistencia_producto_txt {
    #fs =require('fs')
        constructor(){
        }

        async guardar(producto){  

            await this.#fs.promises.writeFile(__dirname + `/producto.txt`,JSON.stringify(producto,null,'\t'))
            /*
            let objeto,objetoAgregar;
            let array_productos=[]
        try {
            let contenido =  await this.#fs.promises.readFile(__dirname + `/productos.txt`,'utf-8')
                if(contenido){ 
                     objeto = contenido
                     console.log(objeto.nombre)
                     for(let i =0; i < objeto.length;i++){
                            array_productos.push(objeto[i])
                         }
                        objetoAgregar = {   
                            nombre: producto.nombre,
                            descripcion:producto.descripcion,
                            codigo: producto.codigo,
                            foto: producto.foto,
                            precio: producto.precio,
                            stock: producto.stock,
                            id: producto.id,
                            timestamp: producto.timestamp,
                        }
                        array_productos.push(objetoAgregar)
                        //console.log(array_productos)

                        this.#fs.promises.writeFile(__dirname + `/productos.txt`,JSON.stringify(producto,null,'\t'))
                       //return array_productos;
                }
                
             } catch (error) {
            throw new Error("hay un problema al guardar")
         }

         */


        } 

    
        leer(){
            
            try {
                const data = this.#fs.readFileSync(`./productos.txt`,'utf-8')
                return  JSON.parse(data)
            } catch (error) {
                throw new Error("hay un problema al leer")
            }
    
        }
    
    
    
}




module.exports = new Persistencia_producto_txt ()