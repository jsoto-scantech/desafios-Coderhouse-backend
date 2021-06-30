const express = require('express')
const router = express.Router()
const productos = require('../api/producto');

//no me funciono funciono 
function admin (req,res,next){
        req.body.admin  = "true"
        if(req.body.admin != "true"){
                res.status(401).send({
                        error:-1,
                        descripcion:`ruta`,
                        metodo:` No autorizado`
                })
        }else{
                next()
        }
        
}

router.post('/productos/guardar',admin, (req,res) => {
        res.json(productos.guardar(req.body))
    
});

router.get('/productos/listar', (req,res) => {
        res.json(productos.leer())
});

router.get('/productos/listar/:id', (req,res) => {
        res.json(productos.buscarProductoId(parseInt(req.params.id)))

});

router.put('/productos/actualizar/:id',admin, (req,res) => {
        res.json(productos.actualizar(parseInt(req.params.id),req.body))
});

router.delete('/productos/borrar/:id',admin,(req,res) => {
        res.json(productos.borrar(parseInt(req.params.id)))
});



module.exports = router;