const db = require('../db');

const obtenerCategorias = (req, res) => {
  db.query('SELECT * FROM categorias', (error, resultados) => {
    if (error) {
      console.error("Error al obtener las categorias", error);
      res.status(500).json({ error: 'Ocurrió un error al obtener las categorías' });
    } else {
      res.json(resultados);
    }
  });
};

const obtenerCategoriaPorId = (req, res) => {
  const id = req.params.id;

  db.query('SELECT * FROM categorias WHERE id_categoria = ?', [id], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al obtener la categoría' });
    } else if (resultados.length === 0) {
      res.status(404).json({ error: 'La categoría no fue encontrada' });
    } else {
      res.json(resultados[0]);
    }
  });
};

const crearCategoria = (req, res) => {
  const { nombre, imagen_categoria } = req.body;

  db.query('INSERT INTO categorias (nombre,imagen_categoria) VALUES (?,?)', [nombre,imagen_categoria], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al crear la categoría' });
    } else {
      res.status(201).json({ mensaje: 'Categoría creada exitosamente' });
    }
  });
};

const actualizarCategoria = (req, res) => {
  const id = req.params.id;
  const { nombre,imagen_categoria } = req.body;

  db.query('UPDATE categorias SET nombre = ?, imagen_categoria = ? WHERE id_categoria = ?', [nombre,imagen_categoria, id], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al actualizar la categoría' });
    } else {
      res.json({ mensaje: 'Categoría actualizada exitosamente' });
    }
  });
};

const eliminarCategoria = (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM categorias WHERE id_categoria = ?', [id], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al eliminar la categoría' });
    } else {
      res.json({ mensaje: 'Categoría eliminada exitosamente' });
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
  obtenerCategorias,
  obtenerCategoriaPorId,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria,AuthReq,
};