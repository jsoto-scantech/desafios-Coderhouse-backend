const knex = require('../database/knex');


(async ()=>{

   await  knex.schema.dropTable('mensajes');
   await knex.schema.dropTable('productos');
    


})()


