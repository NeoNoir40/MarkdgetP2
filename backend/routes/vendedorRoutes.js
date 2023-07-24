const { validateSchema } = require('../controllers/middleware/validator.middleware');
const express = require('express');
const router = express.Router();
const vendedoresController = require('../controllers/vendedorController');
const { registerSchema, loginSchema } = require('../schemas/auth.schema.js');

router.get('/verify', vendedoresController.verifyToken);

router.get('/profile', vendedoresController.AuthReq, vendedoresController.profile);

router.get('/', vendedoresController.obtenerTodosLosVendedores);
// Crear un nuevo vendedor
router.post('/', vendedoresController.crearVendedor);
// Obtener todos los vendedores

// Obtener un vendedor por su ID
router.get('/:id', vendedoresController.obtenerVendedorPorId);
// Actualizar un vendedor existente
router.patch('/:id',  vendedoresController.actualizarVendedor);
// Eliminar un vendedor
router.delete('/:id', vendedoresController.eliminarVendedor);
// Ruta para el login de vendedores
router.post('/login', validateSchema(loginSchema), vendedoresController.login);

router.post('/logout', vendedoresController.logout);

module.exports = router;
