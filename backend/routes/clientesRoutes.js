
const { validateSchema } = require('../controllers/middleware/validator.middleware');
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const {registerSchema, loginSchema}= require ('../schemas/auth.schema.js');

router.get('/profile',clientesController.AuthReq,clientesController.profile);
// Crear un nuevo cliente
router.post('/',validateSchema(registerSchema), clientesController.crearCliente); 
// Obtener todos los clientes
router.get('/',validateSchema(loginSchema),clientesController.obtenerClientes); 
// Obtener un cliente por su ID
router.get('/:id', clientesController.obtenerClientePorId); 
// Actualizar un cliente existente
router.put('/:id', clientesController.actualizarCliente); 
// Eliminar un cliente
router.delete('/:id', clientesController.eliminarCliente); 
// Ruta para el login de clientes
router.post('/login', clientesController.login);

router.post('/logout',clientesController.logout);




module.exports = router;
