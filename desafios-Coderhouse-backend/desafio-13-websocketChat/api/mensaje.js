
class Mensaje{
    #fs =require('fs')
        constructor(){
            this.mensajes=[];
            this.ruta = 'mensajes'
        }

        leer(){
            //return this.mensajes
            try {
                const data = this.#fs.readFileSync(`./public/${this.ruta}.txt`,'utf-8')
                return  JSON.parse(data)
            } catch (error) {
                throw new Error("hay un problema al leer")  
            }
     
        }

        async guardar(mensaje){  
            let objeto,objetoAgregar;
            this.mensajes.push(mensaje)
        try {
            let contenido =  await this.#fs.promises.readFile(`./public/${this.ruta}.txt`,'utf-8')
                if(contenido){
                    let arrayMensajes=[]
                     objeto = JSON.parse(contenido)
                     for(let i =0; i < objeto.length;i++){
                            arrayMensajes.push(objeto[i])
                         }
                    objetoAgregar = {   
                        email : mensaje.email,
                        texto : mensaje.texto,
                        fecha : mensaje.fecha
                     }
                    arrayMensajes.push(objetoAgregar)
                    this.#fs.promises.writeFile(`./public/${this.ruta}.txt`,JSON.stringify(arrayMensajes,null,'\t'))
                  }
                    } catch (error) {
                        throw new Error("hay un problema al guardar")
                    }
        }


        


        /*Leer con promises (no funciona)
       async  leer2(){
            try {
                let contenido = await this.#fs.promises.readFile(`./public/${this.ruta}.txt`,'utf-8')
                return JSON.parse(contenido)
            } catch (error) {
                throw new Error("hay un problema al leer")  
            }
        }
        */

        /*no funciona
        async  readFile() {
            return new Promise((resolve, reject) => {
              this.#fs.readFile(`./public/${this.ruta}.txt`, 'utf8', function (err, data) {
                if (err) {
                  reject(err);
                }
                resolve(JSON.parse(data));
              });
            });
          }
*/

}

module.exports= new Mensaje();