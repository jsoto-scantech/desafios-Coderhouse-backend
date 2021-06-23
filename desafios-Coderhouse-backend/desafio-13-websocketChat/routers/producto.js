const express = require('express');
const router = express.Router();

const productos = require('../api/producto')


router.post('/productos/guardar', (req,res)=>{
    let objeto = req.body
    res.json(productos.guardar(objeto))

})

router.get('/productos/listar',(req,res)=> {
 
       // let obtenerProductos = productos.leer()
      //  if(obtenerProductos.length > 0){validacion= true }else{validacion=false};
       // res.render('vista', {validacion:obtenerProductos.length, allProductos: obtenerProductos})
       res.json(productos.leer())

})

router.get('/productos/listar/:id',(req,res)=> {
    
        let id = req.params.id
        let obtenerProducto = productos.buscarProductoId(id)
        res.type('json').send(JSON.stringify(obtenerProducto,null,'\t'))

})


router.put('/productos/actualizar/:id',(req,res) => {

        let id = parseInt(req.params.id)
        let modificar = productos.actualizar(id,req.body)
        res.send(modificar)

})


router.delete('/productos/borrar/:id',(req,res) => {

        let id = parseInt(req.params.id)
        let borrar = productos.borrar(id)
        res.send(borrar)
})





module.exports = router