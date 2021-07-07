const knex = require('../database/knex');

knex.schema.createTable('productos', table => {
    table.increments('id');
    table.string('nombre');
    table.string('descripcion');
    table.integer('codigo');
    table.string('foto');
    table.integer('stock');
    table.timestamp('fecha', { useTz: true }).notNullable().defaultTo(knex.fn.now());
}).then(() => {
    console.log('tabla productos creada!');
}).catch(error => {
    console.log('error:', error);
    throw error;
}).finally(() => {
    console.log('cerrando conexion...');
    process.exit(0);
});