const express = require('express');
const morgan = require('morgan');
const config = require('./config/app');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send(err);
});


const mensajeRouter = require('./routes/mensajes');
const productoRouter = require('./routes/productos');
console.log(mensajeRouter)
app.use('/api', mensajeRouter);
app.use('/api', productoRouter);

const puerto = process.env.PORT || config.PUERTO;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});
