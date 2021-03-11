const {Proyecto, validate} = require('../models/proyectos'); 

module.exports = {
    getAllProyecto = async function (req, res) {
        const proyectos = await Proyecto.find().sort('name');
        res.send(proyectos);
    },
    postProyecto = async function(req, res) {
        const { error } = validate(req.body); 
        if (error) return res.status(400).send(error.details[0].message);
        const genre = await Genre.findById(req.body.genreId);
        if (!genre) return res.status(400).send('Proyecto invalido.');

        const proyecto = new Proyecto({ 
         nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        tipo_proyecto: req.body.tipo_proyecto
        });
        await proyecto.save();
    
        res.send(proyecto);
    },
    putProyectos = async function(req, res) {
        const { error } = validate(req.body); 
        if (error) return res.status(400).send(error.details[0].message);
  
        const genre = await Genre.findById(req.body.genreId);
        if (!genre) return res.status(400).send('Proyecto invalido.');
  
        const proyecto = await Proyecto.findByIdAndUpdate(req.params.id,
        { 
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            tipo_proyecto: req.body.tipo_proyecto
        }, { new: true });
  
        if (!proyecto) return res.status(404).send('El proyecto con la ID correspondiente no pudo ser encontrado.');
    
        res.send(proyecto);
    },
    deleteProyecto = async function(req, res) {
        const proyecto = await Proyecto.findByIdAndRemove(req.params.id);
  
        if (!proyecto) return res.status(404).send('El proyecto con la ID correspondiente no pudo ser encontrado.');
  
        res.send(proyecto);
    },
    getProyecto = async function(req, res) {
        const proyecto = await Proyecto.findById(req.params.id);
  
        if (!proyecto) return res.status(404).send('El proyecto con la ID correspondiente no pudo ser encontrado.');
  
        res.send(proyecto);
    }

}