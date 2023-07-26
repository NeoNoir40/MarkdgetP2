const db = require("../db");

const obtenerProductosQuery = (req, res) => {
    db.query("SELECT id_producto_categoria, UPPER(SUBSTRING(productos.nombre, 1,30)) AS producto, productos.imagen, stock, categorias.nombre AS categoria, precio FROM productos_categorias INNER JOIN productos ON productos.id_producto = productos_categorias.id_producto INNER JOIN categorias ON categorias.id_categoria = productos_categorias.id_categoria WHERE categorias.id_categoria = 1;", (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        } else {
            res.json(resultados);
        }
    });
};


const obtenerProductosQueryDos = (req, res) => {
    db.query("SELECT id_producto_categoria, UPPER(SUBSTRING(productos.nombre, 1,30)) AS producto, imagen, stock, categorias.nombre AS categoria, precio FROM productos_categorias INNER JOIN productos ON productos.id_producto = productos_categorias.id_producto INNER JOIN categorias ON categorias.id_categoria = productos_categorias.id_categoria WHERE categorias.id_categoria = 2;", (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        } else {
            res.json(resultados);
        }
    });
};

const obtenerProductosQueryTres = (req, res) => {
    db.query("SELECT id_producto_categoria, UPPER(SUBSTRING(productos.nombre, 1,30)) AS producto, imagen, stock, categorias.nombre AS categoria, precio FROM productos_categorias INNER JOIN productos ON productos.id_producto = productos_categorias.id_producto INNER JOIN categorias ON categorias.id_categoria = productos_categorias.id_categoria WHERE categorias.id_categoria = 3;", (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        } else {
            res.json(resultados);
        }
    });
};

const obtenerProductosQueryCuatro = (req, res) => {
    db.query("SELECT id_producto_categoria, UPPER(SUBSTRING(productos.nombre, 1,30)) AS producto, imagen, stock, categorias.nombre AS categoria, precio FROM productos_categorias INNER JOIN productos ON productos.id_producto = productos_categorias.id_producto INNER JOIN categorias ON categorias.id_categoria = productos_categorias.id_categoria WHERE categorias.id_categoria = 4;", (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        } else {
            res.json(resultados);
        }
    });
};

const obtenerProductosQueryCinco = (req, res) => {
    db.query("SELECT id_producto_categoria, UPPER(SUBSTRING(productos.nombre, 1,30)) AS producto, imagen, stock, categorias.nombre AS categoria, precio FROM productos_categorias INNER JOIN productos ON productos.id_producto = productos_categorias.id_producto INNER JOIN categorias ON categorias.id_categoria = productos_categorias.id_categoria WHERE categorias.id_categoria = 5;", (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        } else {
            res.json(resultados);
        }
    });
};

const obtenerProductosQuerySeis = (req, res) => {
    db.query("SELECT id_producto_categoria, UPPER(SUBSTRING(productos.nombre, 1,30)) AS producto, productos.imagen, stock, categorias.nombre AS categoria, precio FROM productos_categorias INNER JOIN productos ON productos.id_producto = productos_categorias.id_producto INNER JOIN categorias ON categorias.id_categoria = productos_categorias.id_categoria WHERE categorias.id_categoria = 6;    ", (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        } else {
            res.json(resultados);
        }
    });
};

const obtenerProductosQuerySiete = (req, res) => {
    db.query("SELECT id_producto_categoria, UPPER(SUBSTRING(productos.nombre, 1,30)) AS producto, imagen, stock, categorias.nombre AS categoria, precio FROM productos_categorias INNER JOIN productos ON productos.id_producto = productos_categorias.id_producto INNER JOIN categorias ON categorias.id_categoria = productos_categorias.id_categoria WHERE categorias.id_categoria = 7;", (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        } else {
            res.json(resultados);
        }
    });
};

const obtenerProductosQueryVista = (req, res) => {
    db.query("SELECT * FROM productos;", (error, resultados) => {
        if (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        } else {
            res.json(resultados);
        }
    });
};
const obtenerProductosQueryId = (req, res) => {
    const id = req.params.id
db.query(
    "SELECT * FROM productos_categorias WHERE id_producto_categoria = ?",
    [id],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: "Error al obtener el producto" });
      } else if (resultados.length === 0) {
        res.status(404).json({ error: "Producto no encontrado" });
      } else {
        res.json(resultados[0]);
      }
    }
  );
};

module.exports = {
    obtenerProductosQuery,
    obtenerProductosQueryDos,
    obtenerProductosQueryTres,
    obtenerProductosQueryCuatro,
    obtenerProductosQueryCinco,
    obtenerProductosQuerySeis,
    obtenerProductosQuerySiete,
    obtenerProductosQueryVista,
    obtenerProductosQueryId
}