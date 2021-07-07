const knex = require('../database/knex');


class Producto {

    constructor() { }

    async guardar(producto) {
        try {
            let productoNuevo ={
                nombre : producto.nombre,
                descripcion : producto.descripcion,
                codigo : producto.codigo,
                foto :  producto.foto,
                stock : producto.stock,
                fecha: new Date ().toLocaleString()
            }
            let resultado = await knex('productos').insert(productoNuevo);
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    async listar() {
        try {
            let mensajes = await knex.from('productos').select('*')
            return mensajes;
        } catch (error) {
            throw error;
        }
    }
    
    async actualizar(id,producto) {
        try {
            let productos = await knex.from('productos').where('id', id).update(producto)
            return productos;
        } catch (error) {
            throw error;
        }
    }

    async borrar(id) {
        try {
            let productos = await  knex.from('productos').where('id', '=', id).del()
            return productos;
        } catch (error) {
            throw error;
        }
    }

    async buscar(id) {
        try {
            let productos = await knex.from('productos').select('*').where('id', '=', id)
            return productos;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Producto();