const express = require('express');
const { validateSchema } = require('../controllers/middleware/validator.middleware');
const router = express.Router();
const administradoresController = require('../controllers/administradoresController');
const { loginSchema } = require('../schemas/auth.schema');

router.get('/verify',administradoresController.verifyToken);
// Obtener todos los administradores

router.get('/clientes',administradoresController.AuthReq,administradoresController.obtenerClientes); 

router.get('/', administradoresController.obtenerAdministradores);

// Obtener un administrador por su ID
router.get('/:id', administradoresController.obtenerAdministradorPorId);

// Crear un nuevo administrador
router.post('/', administradoresController.crearAdministrador);

// Actualizar un administrador existente
router.put('/:id', administradoresController.actualizarAdministrador);

// Eliminar un administrador
router.delete('/:id', administradoresController.eliminarAdministrador);

// Ruta POST para autenticar un administrador
router.post('/login', validateSchema(loginSchema), administradoresController.login);

router.post('/logout',administradoresController.logout);

module.exports = router;
