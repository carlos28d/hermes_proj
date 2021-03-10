const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', Usuario.getUsuario)

module.exports = router;