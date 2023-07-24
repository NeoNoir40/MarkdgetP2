const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenSecret = 'SECRET';





const obtenerTodosLosVendedores = (req, res) => {
    db.query('SELECT * FROM vendedor', (error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Ocurrió un error al obtener los vendedores' });
        } else {
            res.json(resultados);
        }
    });
};


const crearVendedor = (req, res) => {
    const { nombre, email, contrasena, descripcion } = req.body;
    const hashedPassword = bcrypt.hashSync(contrasena, 10);

    db.query('SELECT * FROM vendedor WHERE email = ?', [email], (error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Ocurrió un error al buscar el vendedor' });
        } else if (resultados.length > 0) {
            res.status(400).json(["El correo ya ha sido registrado"]);
        } else {
            db.query(
                'INSERT INTO vendedor (nombre, email, contrasena, descripcion) VALUES (?, ?, ?, ?)',
                [nombre, email, hashedPassword, descripcion],
                (error, resultados) => {
                    if (error) {
                        res.status(500).json({ error: 'Ocurrió un error al crear el vendedor' });
                    } else {
                        res.status(201).json({ mensaje: 'Vendedor creado exitosamente' });
                    }
                }
            );
        }
    });
};

const obtenerVendedorPorId = (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM vendedor WHERE id_vendedor = ?', [id], (error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Ocurrió un error al obtener el vendedor' });
        } else if (resultados.length === 0) {
            res.status(404).json({ error: 'El vendedor no fue encontrado' });
        } else {
            res.json(resultados[0]);
        }
    });
};

const actualizarVendedor = (req, res) => {
    const id = req.params.id;
    const { nombre, email, contrasena, descripcion } = req.body;
    const hashedPassword = bcrypt.hashSync(contrasena, 10);

    db.query(
        'UPDATE vendedor SET nombre = ?, email = ?, contrasena = ?, descripcion = ? WHERE id_vendedor = ?',
        [nombre, email, hashedPassword, descripcion, id],
        (error, resultados) => {
            if (error) {
                res.status(500).json({ error: 'Ocurrió un error al actualizar el vendedor' });
            } else {
                res.json({ mensaje: 'Vendedor actualizado exitosamente' });
            }
        }
    );
};

const eliminarVendedor = (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM vendedor WHERE id_vendedor = ?', [id], (error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Ocurrió un error al eliminar el vendedor' });
        } else {
            res.json({ mensaje: 'Vendedor eliminado exitosamente' });
        }
    });
};

const login = (req, res) => {
    const { email, contrasena } = req.body;

    db.query('SELECT * FROM vendedor WHERE email = ?', [email], (error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Ocurrió un error al iniciar sesión' });
        } else if (resultados.length === 0) {
            res.status(401).json({ error: 'Credenciales inválidas' });
        } else {
            const vendedor = resultados[0];
            const contrasenaValida = bcrypt.compareSync(contrasena, vendedor.contrasena);

            if (contrasenaValida) {
                // La contraseña es válida, se puede permitir el acceso
                // Aquí se puede generar un tokenv de autenticación, establecer una sesión, etc.
                const tokenv = jwt.sign({ id: vendedor.id_vendedor }, tokenSecret, { expiresIn: '1d' });

                res.cookie('tokenv', tokenv);

                res.json({ mensaje: 'Inicio de sesión exitoso de vendedor', tokenv: tokenv });
            } else {
                res.status(401).json({ error: 'Contraseña incorrecta' });
            }
        }
    });
};

const AuthReq = (req, res, next) => {
    const { tokenv } = req.cookies;

    if (!tokenv) return res.status(401).json({ message: "Sin tokenv, autorización denegada" });

    jwt.verify(tokenv, tokenSecret, (err, vendedor) => {
        if (err) return res.status(403).json({ message: "Token no válido" });

        // El objeto decodificado del tokenv se almacena en la variable 'vendedor'
        req.vendedor = vendedor

        next();
    });
};

const verifyToken = async (req, res) => {
    const { tokenv } = req.cookies;
    if (!tokenv) return res.json({ authenticated: false });

    jwt.verify(tokenv, tokenSecret, async (error, vendedor) => {
        if (error) return res.sendStatus(401);

        const id = vendedor.id
        console.log("ID del usuario:", id);
        console.log("tokenv del:", tokenv);

        db.query('SELECT * FROM vendedor WHERE id_vendedor = ?', [id], async (error, results) => {
            if (error) {
                res.status(500).json({ error: 'Ocurrió un error al verificar el tokenv' });
            } else if (results.length === 0) {
                res.sendStatus(401);
            } else {
                const vendedorFound = results[0];

                return res.json({
                    id: vendedorFound.id_vendedor,
                    nombre: vendedorFound.nombre,
                    email: vendedorFound.email,
                    // Otros datos del vendedor que se deseen incluir en la respuesta
                });
            }
        });
    });
};


const profile = (req, res) => {
    const id = req.vendedor.id;

    db.query(
        'SELECT id_vendedor , nombre, email, descripcion FROM vendedor WHERE id_vendedor = ?',
        [id],
        (error, resultados) => {
            if (error) {
                res.status(500).json({ error: 'Ocurrió un error al obtener el vendedor' });
            } else if (resultados.length === 0) {
                res.status(404).json({ error: 'El vendedor no fue encontrado' });
            } else {
                const vendedor = resultados[0];
                res.json({
                    id_vendedor: vendedor.id_vendedor,
                    nombre: vendedor.nombre,
                    email: vendedor.email,
                    contrasena: vendedor.contrasena,
                    descripcion: vendedor.descripcion
                });
            }
        }
    );
};

const contarProductos = (req, res) => {
    const id = req.params.id;
    
    db.query(
        'SELECT id_vendedor ,  count(id_producto) as cantidad_productos  FROM productos WHERE id_vendedor = ?',
        [id],
        (error, resultados) => {
            if (error) {
                res.status(500).json({ error: 'Ocurrió un error al obtener el vendedor y la cantidad de productos que le pertenecen' });
            } else if (resultados.length === 0) {
                res.status(404).json({ error: 'El vendedor no fue encontrado' });
            } else {
                const contProd = resultados[0];
                res.json({
                    id_vendedor: contProd.id_vendedor,
                    cantidad_productos: contProd.cantidad_productos
                });
            }
        }
    );
};


const obtenerProductosVendedores = (req,res) => {
    const id =  req.params.id;

    db.query('SELECT vendedor.nombre ,productos.nombre,  precio, imagen, stock FROM productos  INNER JOIN vendedor ON productos.id_vendedor = vendedor.id_vendedor WHERE vendedor.id_vendedor = ?',[id],(error, resultados) =>{
      if(error){
        res.status(501),json({error : 'Ocurrio un error al obtener las relacion vendedor-producto'});
      }else{
        res.json(resultados)
      }
    });
  };


const logout = (req, res) => {
    // Eliminar la cookie que almacena el tokenv
    res.clearCookie('tokenv');

    // Responder con éxito al cliente
    res.json({ mensaje: 'Logout exitoso' });
}

module.exports = {
    obtenerProductosVendedores,
    crearVendedor,
    obtenerVendedorPorId,
    actualizarVendedor,
    eliminarVendedor,
    login,
    logout,
    profile,
    AuthReq,
    verifyToken,
    obtenerTodosLosVendedores,
    contarProductos,
};
