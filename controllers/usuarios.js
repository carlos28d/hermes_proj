//const Usuario = require('../models').Usuario
const models = require ('../models')
const {Usuario, validate} = require ('../models/usuario');

module.exports = {

getUsuario =  async function (req, res){
    const usuario = await Usuario.find().sort('nombre');
    res.send(usuario);
},

actualizarUsuario = async function (req, res) {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    res.send(usuario);
   
}
}