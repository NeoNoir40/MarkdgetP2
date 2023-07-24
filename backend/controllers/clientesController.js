const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenSecret = 'SECRET';


const crearCliente = (req, res) => {
  const { nombre, email, contrasena, direccion, ciudad, estado, pais } = req.body;
  const hashedPassword = bcrypt.hashSync(contrasena, 10);

  db.query('SELECT * FROM clientes WHERE email = ?', [email], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al buscar el cliente' });
    } else if (resultados.length > 0) {
      res.status(400).json(["El correo ya ha sido registrado"]);
    } else {
      db.query(
        'INSERT INTO clientes (nombre, email, contrasena, direccion, ciudad, estado, pais) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nombre, email, hashedPassword, direccion, ciudad, estado, pais],
        (error, resultados) => {
          if (error) {
            res.status(500).json({ error: 'Ocurrió un error al crear el cliente' });
          } else {
            res.status(201).json({ mensaje: 'Cliente creado exitosamente' });
          }
        }
      );
    }
  });
};



const obtenerClientePorId = (req, res) => {
  const id = req.params.id;

  db.query('SELECT * FROM clientes WHERE id_cliente = ?', [id], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al obtener el cliente' });
    } else if (resultados.length === 0) {
      res.status(404).json({ error: 'El cliente no fue encontrado' });
    } else {
      res.json(resultados[0]);
    }
  });
};

const actualizarCliente = (req, res) => {
  const id = req.params.id;
  const { nombre, email, contrasena, direccion, ciudad, estado, pais } = req.body;
  const hashedPassword = bcrypt.hashSync(contrasena, 10);

  db.query(
    'UPDATE clientes SET nombre = ?, email = ?, contrasena = ?, direccion = ?, ciudad = ?, estado = ?, pais = ? WHERE id_cliente = ?',
    [nombre, email, hashedPassword, direccion, ciudad, estado, pais, id],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: 'Ocurrió un error al actualizar el cliente' });
      } else {
        res.json({ mensaje: 'Cliente actualizado exitosamente' });
      }
    }
  );
};

const eliminarCliente = (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM clientes WHERE id_cliente = ?', [id], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al eliminar el cliente' });
    } else {
      res.json({ mensaje: 'Cliente eliminado exitosamente' });
    }
  });
};

const login = (req, res) => {
  const { email, contrasena } = req.body;

  db.query('SELECT * FROM clientes WHERE email = ?', [email], (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al iniciar sesión' });
    } else if (resultados.length === 0) {
      res.status(401).json({ error: 'Credenciales inválidas' });
    } else {
      const cliente = resultados[0];
      const contrasenaValida = bcrypt.compareSync(contrasena, cliente.contrasena);

      if (contrasenaValida) {
        // La contraseña es válida, se puede permitir el acceso
        // Aquí se puede generar un token de autenticación, establecer una sesión, etc.
        const token = jwt.sign({ id: cliente.id_cliente }, tokenSecret, { expiresIn: '1d' });

        res.cookie('token', token);


        res.json({ mensaje: 'Inicio de sesión exitoso de cliente', token: token });
      } else {
        res.status(401).json({ error: 'Contraseña incorrecta' });
      }
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

const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.json({ authenticated: false });

  jwt.verify(token, tokenSecret, async (error, user) => {
    if (error) return res.sendStatus(401);

    const id = user.id
    console.log("ID del usuario:", id);
    console.log("token del:", token);

    db.query('SELECT * FROM clientes WHERE id_cliente = ?', [id], async (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Ocurrió un error al verificar el token' });
      } else if (results.length === 0) {
        res.sendStatus(401);
      } else {
        const userFound = results[0];

        return res.json({
          id: userFound.id_cliente,
          nombre: userFound.nombre,
          email: userFound.email,
          // Otros datos del usuario que se deseen incluir en la respuesta
        });
      }
    });
  });
};

const profile = (req, res) => {
  const id = req.user.id;

  db.query(
    'SELECT  nombre, email, direccion, ciudad, estado, pais FROM clientes WHERE id_cliente = ?',
    [id],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: 'Ocurrió un error al obtener el cliente' });
      } else if (resultados.length === 0) {
        res.status(404).json({ error: 'El cliente no fue encontrado' });
      } else {
        const cliente = resultados[0];
        res.json({
          nombre: cliente.nombre,
          email: cliente.email,
          direccion: cliente.direccion,
          ciudad: cliente.ciudad,
          estado: cliente.estado,
          pais: cliente.pais
        });
      }
    }
  );
};



const logout = (req, res) => {
  // Eliminar la cookie que almacena el token
  res.clearCookie('token');

  // Responder con éxito al cliente
  res.json({ mensaje: 'Logout exitoso' });
}

module.exports = {
  crearCliente,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
  login,
  logout,
  profile,
  AuthReq,
  verifyToken,

};
