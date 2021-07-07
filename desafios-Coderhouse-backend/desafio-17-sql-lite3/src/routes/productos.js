const express = require('express');
const router = express.Router();
const controlador = require('../api/productos');

router.post('/producto/guardar', async (req, res) => {
    try {
        let producto = await controlador.guardar(req.body);
        res.json(producto);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/producto/listar', async (req, res) => {
    try {
        let producto = await controlador.listar();
        res.json(producto);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.put('/producto/actualizar/:id', async (req, res) => {
    try {
        let id =parseInt(req.params.id)
        let producto = await controlador.actualizar(id,req.body);
        res.json(producto);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.delete('/producto/borrar/:id', async (req, res) => {
    try {
        let id = req.params.id
        let producto = await controlador.borrar(id);
        res.json(producto);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/producto/listar/:id', async (req, res) => {
    try {
        let id = req.params.id
        let producto = await controlador.buscar(id);
        res.json(producto);
    } catch (error) {
        res.status(500).send(error);
    }
});



module.exports = router;