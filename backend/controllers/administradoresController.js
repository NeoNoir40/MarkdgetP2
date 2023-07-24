const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const tokenSecret = 'SECRET';



const obtenerClientes = (req, res) => {
  db.query('SELECT * FROM clientes', (error, resultados) => {
    if (error) {
      res.status(500).json({ error: 'Ocurrió un error al obtener los clientes' });
    } else {
      res.json(resultados);
    }
  });
};


const obtenerAdministradores = (req, res) => {
  db.query("SELECT * FROM administradores", (error, resultados) => {
    if (error) {
      res
        .status(500)
        .json({ error: "Ocurrió un error al obtener los administradores" });
    } else {
      res.json(resultados);
    }
  });
};

const obtenerAdministradorPorId = (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM administradores WHERE id_administrador = ?",
    [id],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al obtener el administrador" });
      } else if (resultados.length === 0) {
        res.status(404).json({ error: "El administrador no fue encontrado" });
      } else {
        res.json(resultados[0]);
      }
    }
  );
};

const crearAdministrador = (req, res) => {
  const { nombre, email, contrasena } = req.body;
  const hashedPassword = bcrypt.hashSync(contrasena, 10);

  db.query(
    "INSERT INTO administradores (nombre, email, contrasena) VALUES (?, ?, ?)",
    [nombre, email, hashedPassword],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al crear el administrador" });
      } else {
        res.status(201).json({ mensaje: "Administrador creado exitosamente" });
      }
    }
  );
};

const actualizarAdministrador = (req, res) => {
  const id = req.params.id;
  const { nombre, email, contrasena } = req.body;
  const hashedPassword = bcrypt.hashSync(contrasena, 10);

  db.query(
    "UPDATE administradores SET nombre = ?, email = ?, contrasena = ? WHERE id_administrador = ?",
    [nombre, email, hashedPassword, id],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al actualizar el administrador" });
      } else {
        res.json({ mensaje: "Administrador actualizado exitosamente" });
      }
    }
  );
};

const eliminarAdministrador = (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM administradores WHERE id_administrador = ?",
    [id],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al eliminar el administrador" });
      } else {
        res.json({ mensaje: "Administrador eliminado exitosamente" });
      }
    }
  );
};

const login = (req, res) => {
  const { email, contrasena } = req.body;

  db.query(
    "SELECT * FROM administradores WHERE email = ?",
    [email],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: "Ocurrió un error al iniciar sesión" });
      } else if (resultados.length === 0) {
        res.status(401).json({ error: "Credenciales inválidas" });
      } else {
        const administrador = resultados[0];
        const contrasenaValida = bcrypt.compareSync(
          contrasena,
          administrador.contrasena
        );


        if (contrasenaValida) {
          // La contraseña es válida, se puede permitir el acceso
          // Aquí se puede generar un tokena de autenticación, establecer una sesión, etc.
          const tokena = jwt.sign({ id: administrador.id_administrador  }, tokenSecret, { expiresIn: '1d' });
  
          res.cookie('tokena', tokena);
  
           
          res.json({ mensaje: 'Inicio de sesión exitoso del admin', tokena: tokena });
        } else {
          res.status(401).json({ error: 'Contraseña incorrecta' });
        }
      }
    });
  };

const AuthReq = (req, res, next) => {
  const { tokena } = req.cookies;

  if (!tokena) return res.status(401).json({ message: "Sin tokena, autorizacion denegada" });

  jwt.verify(tokena, tokenSecret, (err, admin) => {
    if (err) return res.status(403).json({ message: "Token no valido" });

    // El objeto decodificado del tokena se almacena en la variable 'admin'
    req.admin = admin

    next();
  });
};


const verifyToken = async (req, res) => {
  const { tokena } = req.cookies;
  if (!tokena) return res.json({authenticated: false});

  jwt.verify(tokena, tokenSecret, async (error, admin) => {
    if (error) return res.sendStatus(401);

    const id = admin.id
    console.log("ID del usuario:", id);
    console.log("tokena del:", tokena);

    db.query('SELECT * FROM administradores WHERE id_administrador = ?', [id], async (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Ocurrió un error al verificar el tokena' });
      } else if (results.length === 0) {
        res.sendStatus(401);
      } else {
        const adminFound = results[0];

        return res.json({
          id: adminFound.id_administrador,
          nombre: adminFound.nombre,
          email: adminFound.email,
          // Otros datos del usuario que se deseen incluir en la respuesta
        });
      }
    });
  });
};



const logout =(req,res) =>{
  // Eliminar la cookie que almacena el tokena
  res.clearCookie('tokena');

  // Responder con éxito al cliente
  res.json({ mensaje: 'Logout exitoso' });
}


module.exports = {
  obtenerClientes,
  obtenerAdministradores,
  obtenerAdministradorPorId,
  crearAdministrador,
  actualizarAdministrador,
  eliminarAdministrador,
  login,
  AuthReq,
  verifyToken,
  logout,
  
};
