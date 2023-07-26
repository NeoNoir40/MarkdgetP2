const express = require('express');
const router = express.Router();
const multer = require('multer');

const productosController = require('../controllers/productosController');

const almacenamientoimg = multer.diskStorage({
    destination: (req, file, callback) => {
        // Especifica la carpeta de destino donde se guardarán los archivos subidos.
        // Por ejemplo, '../../frontend/src/img' guardará los archivos en una carpeta llamada 'img'
        callback(null, '../../frontend/src/img');
    },
    filename: (req, file, callback) => {
        // Personaliza el nombre del archivo subido.
        // Por ejemplo, aquí mantendremos el nombre original del archivo.
        callback(null, file.originalname);
    },
});
const upload = multer({ storage: almacenamientoimg });


router.post('/', upload.single('imagen'), productosController.crearProducto);

// Ruta GET para obtener todos los productos
router.get('/', productosController.obtenerProductos);

router.get('/ProductosVendedor/:id', productosController.obtenerProductoPorIdVendedor);


// Ruta GET para obtener un producto por su ID
router.get('/:id', productosController.obtenerProductoPorId);

// Ruta POST para crear un nuevo producto
router.post('/', productosController.crearProducto);

// Ruta PUT para actualizar un producto existente
router.patch('/:id', productosController.actualizarProducto);

// Ruta DELETE para eliminar un producto
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;
