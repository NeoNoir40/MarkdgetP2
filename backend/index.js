const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3001;

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin:'http://localhost:3000',
  credentials: true
}));






// Rutas
const categoriasRoutes = require('./routes/categoriasRoutes');
const productosRoutes = require('./routes/productosRoutes');
const productosCategoriasRoutes = require('./routes/productosCategoriasRoutes');
const administradoresRoutes = require('./routes/administradoresRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const vendedorRoutes = require('./routes/vendedorRoutes');
const productosQueryRoute = require('./routes/productosQueryRoute');

app.use('/api/categorias', categoriasRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/productosCategoriasRoutes', productosCategoriasRoutes);
app.use('/api/administradores', administradoresRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/vendedor', vendedorRoutes);
app.use('/api/productosQuery', productosQueryRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo</h1>");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
