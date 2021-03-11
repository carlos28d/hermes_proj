const express = require('express');
const usuarios = require('../routes/usuarios');
const proyectos = require('../routes/proyectos');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/usuarios', usuarios);
  app.use('/api/proyectos', proyectos);
  app.use(error);
}