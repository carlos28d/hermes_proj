const Joi = require('joi');
const mongoose = require('mongoose');

const Proyecto = mongoose.model('Proyecto', new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    descripcion: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100
    },
    fecha_creacion: {
        type: Date,
        required: true,
        default: Date.now
    },
    tipo_proyecto: {
        type: [String],
        required: true,
        default: ["Al largo plazo", "A corto plazo", "A mediano plazo"]
    }
}));

function validateProyecto(proyecto) {
    const schema = {
      nombre: Joi.string().min(5).max(50).required(),
      proyectoId: Joi.objectId().required(),
    };
  
    return Joi.validate(proyecto, schema);
  }
  
  exports.Proyecto = Proyecto; 
  exports.validate = validateProyecto;