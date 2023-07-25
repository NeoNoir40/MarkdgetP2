const express = require('express');
const router = express.Router();
const productosQueryController = require('../controllers/productosQueryController');
const { route } = require('./categoriasRoutes');

router.get('/', productosQueryController.obtenerProductosQuery);

router.get('/dos', productosQueryController.obtenerProductosQueryDos);

router.get('/tres', productosQueryController.obtenerProductosQueryTres);

router.get('/cuatro', productosQueryController.obtenerProductosQueryCuatro);

router.get('/cinco', productosQueryController.obtenerProductosQueryCinco);

router.get('/seis', productosQueryController.obtenerProductosQuerySeis);

router.get('/siete', productosQueryController.obtenerProductosQuerySiete);

module.exports = router;