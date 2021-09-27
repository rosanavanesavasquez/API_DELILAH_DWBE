// Endpoints de la app

const express = require('express');
const { users } = require('./01user');
const config = require('./07config');
const app = express();

//primer end point de prueba
// cargar todos los end points de la aplicacion

app.get('/', function (req, res) {
    res.send('Delilah Restó');
});

app.get('/user', function (req, res) {
    res.send(users);
});

let port = 3000;
app.listen (port, function (){
    console.log ('Iniciando prueba de API en puerto ' +port);
});
