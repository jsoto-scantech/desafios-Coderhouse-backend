const producto = require('../models/producto');

class ProductoController {

    constructor() { }

    async guardar(producto) {
        try {
            return await producto.guardar(producto);
        } catch (error) {
            throw error;
        }
    }
    async listar() {
        try {
            return await producto.listar();
        } catch (error) {
            throw error;
        }
    }
    async borrar(id) {
        try {
            return await producto.borrar(id);
        } catch (error) {
            throw error;
        }
    }
    async actualizar(id, producto) {
        try {
            return await producto.actualizar(id,producto);
        } catch (error) {
            throw error;
        }
    }
    async buscar(id) {
        try {
            return await producto.buscar(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductoController();