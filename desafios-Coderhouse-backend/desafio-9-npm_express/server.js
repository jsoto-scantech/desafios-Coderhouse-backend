const express = require('express');
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    //console.log(__dirname)
    res.sendFile('index')
});


const route_productos = require('./routes/producto')
app.use('/api',route_productos)




const cfg = require('./config/config')
const server = app.listen(cfg.port, () =>{
    console.log(`Servidor escuchando en http://localhost:${cfg.port}`)
});

server.on ('error',error => {
    console.log('error en el servidor:', error);
});


