const knex = require('../database/knex');

class Mensaje {

    constructor() { }

    async guardar(mensaje) {
        try {
            let mensajenuevo ={
                mensaje : mensaje.mensaje,
                email : mensaje.email
            }
            let resultado = await knex('mensajes').insert(mensajenuevo);
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    async listar() {
        try {
            let mensajes = await knex.from('mensajes').select('*')
            return mensajes;
        } catch (error) {
            throw error;
        }
    }
    
    async actualizar(id,mensaje) {
        try {
            let mensajes = await knex.from('mensajes').where('id', id).update(mensaje)
            return mensajes;
        } catch (error) {
            throw error;
        }
    }

    async borrar(id) {
        try {
            let mensajes = await knex.from('mensajes').where('id', '=', id).del()
            return mensajes;
        } catch (error) {
            throw error;
        }
    }

    async buscar(id) {
        try {
            let mensajes = await knex.from('mensajes').select('*').where('id', '=', id)
            return mensajes;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Mensaje();