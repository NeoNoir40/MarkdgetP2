const db = require('../db');

// Obtener todas las relaciones productos-categorias
const obtenerProductosCategorias = (req, res) => {
  db.query('SELECT pc.id_producto_categoria, p.nombre AS nombre_producto, c.nombre AS nombre_categoria , pc.imagen AS imagen_categoria FROM productos_categorias pc INNER JOIN productos p ON pc.id_producto = p.id_producto INNER JOIN categorias c ON pc.id_categoria = c.id_categoria', (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al obtener las relaciones productos-categorias' });
    } else {
      res.json(resultados);
    }
  });
};

// Obtener la relación producto-categoria por su ID
const obtenerProductoCategoriaPorId = (req, res) => {
  const id = req.params.id;

  db.query('SELECT pc.id_producto_categoria, p.nombre AS nombre_producto, c.nombre AS nombre_categoria , pc.imagen AS imagen_categoria  FROM productos_categorias pc INNER JOIN productos p ON pc.id_producto = p.id_producto INNER JOIN categorias c ON pc.id_categoria = c.id_categoria WHERE pc.id_producto_categoria = ?', [id], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al obtener la relación producto-categoria' });
    } else if (resultados.length === 0) {
      res.status(404).json({ error: 'La relación producto-categoria no fue encontrada' });
    } else {
      res.json(resultados[0]);
    }
  });
};

// Crear una nueva relación producto-categoria
const crearProductoCategoria = (req, res) => {
  const { id_producto, id_categoria , imagen } = req.body;

  db.query(
    'INSERT INTO productos_categorias (id_producto, id_categoria , imagen ) VALUES (?, ?, ?)',
    [id_producto, id_categoria, imagen],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: 'Ocurrió un error al crear la relación producto-categoria' });
      } else {
        res.status(201).json({ mensaje: 'Relación producto-categoria creada exitosamente' });
      }
    }
  );
};

// Actualizar una relación producto-categoria existente
const actualizarProductoCategoria = (req, res) => {
  const id = req.params.id;
  const { id_producto, id_categoria , imagen } = req.body;

  db.query(
    'UPDATE productos_categorias SET id_producto = ?, id_categoria = ? , imagen = ? WHERE id_producto_categoria = ?',
    [id_producto, id_categoria, imagen, id],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: 'Ocurrió un error al actualizar la relación producto-categoria' });
      } else {
        res.json({ mensaje: 'Relación producto-categoria actualizada exitosamente' });
      }
    }
  );
};

// Eliminar una relación producto-categoria
const eliminarProductoCategoria = (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM productos_categorias WHERE id_producto_categoria = ?', [id], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al eliminar la relación producto-categoria' });
    } else {
      res.json({ mensaje: 'Relación producto-categoria eliminada exitosamente' });
    }
  });
};

const AuthReq = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Sin token, autorizacion denegada" });

  jwt.verify(token, tokenSecret, (err, user) => {
    if (err) return res.status(403).json({ message: "Token no valido" });

    // El objeto decodificado del token se almacena en la variable 'user'
    req.user = user

    next();
  });
};

module.exports = {
  obtenerProductosCategorias,
  obtenerProductoCategoriaPorId,
  crearProductoCategoria,
  actualizarProductoCategoria,
  eliminarProductoCategoria,AuthReq,
};
