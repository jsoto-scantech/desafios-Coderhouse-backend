const { throws } = require('assert')

class Archivo{
    #fs =require('fs')
    constructor(ruta){
        this.ruta = ruta
        
    }

    async guardar(producto){
        let productosAll= []
        let ob,objetoAgregar;
        try {
            let contenido = await  this.#fs.promises.readFile(`./${this.ruta}.txt`,'utf-8')
           
           if(contenido){
            ob = JSON.parse(contenido)
            
            for(let i =0; i < ob.length;i++){
                productosAll.push(ob[i])
            }

            objetoAgregar = {   
                title : producto.title,
                price : producto.price,
                thumbnail :producto.thumbnail,
                id : productosAll.length+1

            }

            productosAll.push(objetoAgregar)

            this.#fs.promises.writeFile(`./${this.ruta}.txt`,JSON.stringify(productosAll,null,'\t'))
           
           }
         
          


        } catch (error) {
            throw new Error("hay un problema al guardar")
        }
        
    }

    async leer(ruta){

        try {
            let contenido = await  this.#fs.promises.readFile(`./${ruta}.txt`,'utf-8')
            return contenido
           
        } catch (error) {
                return []   //+
        }
    }

    async borrar(ruta){
        try {
            await this.#fs.promises.unlink(`./${ruta}.txt`)
        } catch (error) {
            console.log("no se encontro el archivo "+error)    //validando  +
        }
        
    }

}




let productos1={
    title:'pc',
    price:1000,
    thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fhardzone.es%2Ftutoriales%2Fcompras%2Fcomprar-pc-gaming-consejos%2F&psig=AOvVaw05kNDFEoOr8x156UytAD2V&ust=1622070665237000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICCvqD65fACFQAAAAAdAAAAABAD"
}
let productos2={
    title:'calculador',
    price:2000,
    thumbnail:"chttps://www.google.com/url?sa=i&url=https%3A%2F%2Fsimple.ripley.cl%2Fcalculadora-casio-mx-12b-bk-w-dc-mpm00006342126&psig=AOvVaw14mA_lyD-SRjpnx4EbsR-R&ust=1622070679994000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjfsaf65fACFQAAAAAdAAAAABAD"

}
let productos3 ={
    title:'tijeras',
    price:3000,
    thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.caleu.cl%2Flibreria%2F833-tijera-escritorio-dahle.html&psig=AOvVaw35A_Zog9EQtgxtt6sSuYY1&ust=1622070695783000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjx_q765fACFQAAAAAdAAAAABAD"
}

let archivo = new Archivo('productos')


/* GUARDAR
archivo.guardar(productos2).then(contenido => {
  //  console.log(contenido)
}).catch(error =>{
    console.log(error)
})
*/

/*
archivo.leer('productos').then(contenido => {
    console.log(contenido)
}).catch( error => {
    console.log(error)
})
console.log("S")
*/
/*
archivo.borrar('borr').then( contenido => {

}).catch(error => {
    console.log(error)
})

*/