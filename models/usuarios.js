const Joi = require('joi');
const mongoose = require ('mongoose');

const Usuario = mongoose.model( 'Usuario', new mongoose.Schema({
    _id: IdObject,
    nombre: {
        type: String,
        required: true,
        minlength: 2, maxlength: 20
    },
    apellidopat: {
        type: String,
        required: true,
        minlength: 2, maxlength: 20
    },
    apellidomat: {
        type: String,
        required: true,
        minlength: 2, maxlength: 20
    },
    contrasenia: {
        type: String,
        required: true,
        minlength: 2, maxlength: 20
    },
    telefono: {
        type:String,
        required: false,
        minlength: 2, maxlength: 20
    },
    direccion: {
        type:String,
        required: true,
        minlength: 10, maxlength: 255
    },
    descripcion: {
        type:String,
        required: true,
        minlength: 2, maxlength: 255
    },
    fechanacimiento: {
        type:Date,
        required: false,
    },
    estatus: Boolean
}));

function validateUsuario (usuario){
    const schema = {
        nombre:Joi.string().min(2).max(20).requerired(),
        apellidopat:Joi.string().min(2).max(20).requerired(),
        apellidomat:Joi.string().min(2).max(20).requerired(),
        telefono:Joi.string().min(2).max(20).requerired(),
        estatus: Joi.boolean()
    };
    return Joi.validate(usuario, schema);
};

exports.Usuario = Usuario; 
exports.validate =  validateUsuario;


