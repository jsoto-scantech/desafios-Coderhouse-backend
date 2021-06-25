'use strict';
var express = require('express');
var app = express();
app.use('/static', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var puerto = 8080;
app.set('views', './views');
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('formulario');
});
var route_productos = require('./routers/producto');
app.use('/api', route_productos);
var server = app.listen(puerto, function () {
    console.log('servidor escuchando en http://localhost:' + puerto);
});
server.on('error', function (error) {
    console.log('error en el servidor:', error);
});
