"use strict";
var express = require('express');
var app = express();
var cors = require('cors');
var configuracion = {
    hostname: "127.0.0.1",
    port: 5000,
};
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://localhost:".concat(configuracion.port));
});
app.use(cors());
app.use('/api', require('./routes/index'));
