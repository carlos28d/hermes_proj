const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const proyecto = require('../controllers/proyectos');

router.get('/', proyecto.getAllProyecto);
  
router.post('/', proyecto.postProyecto);
  
router.put('/:id', proyecto.putProyecto);
  
router.delete('/:id', proyecto.deleteProyecto);
  
router.get('/:id', proyecto.getProyecto);
  
module.exports = router; 