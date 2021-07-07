const express = require('express');
const router = express.Router();
const controlador = require('../api/mensajes');

router.post('/mensajes/guardar', async (req, res) => {
    try {
        let mensaje = await controlador.guardar(req.body);
        res.send(mensaje);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/mensajes/listar', async (req, res) => {
    try {
        let mensajes = await controlador.listar();
        res.send(mensajes);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.put('/mensajes/actualizar/:id', async (req, res) => {
    try {
        let id =parseInt(req.params.id)
        let mensajes = await controlador.actualizar(id,req.body);
        res.send(mensajes);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.delete('/mensajes/borrar/:id', async (req, res) => {
    try {
        let id = req.params.id
        let mensajes = await controlador.borrar(id);
        res.send(mensajes);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/mensajes/listar/:id', async (req, res) => {
    try {
        let id = req.params.id
        let mensajes = await controlador.buscar(id);
        res.send(mensajes);
    } catch (error) {
        res.status(500).send(error);
    }
});



module.exports = router;