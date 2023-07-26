
import './App.css';
import Encabezado from './components/Encabezado';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';
import Registro from './pages/Registro';
import RecuperContraseña from './pages/RecuperarContraseña';
import Perfil from './pages/Perfil'
import Productos from './pages/Productos';
import PasarelaPago from './pages/PasarelaPago';
import Ayuda from './pages/Ayuda';
import ConfiCuenta from './pages/Conficuenta';
import Seguridad from './pages/Seguridad';
import VistaProducto from './pages/VistaProducto';
import AdministrarProductos from './pages/AdministrarProductos';
import EditarProductos from './pages/EditarProductos';
import CrearProducto from './pages/CrearProducto';
import EditarUsuario from './pages/EditarUsuario';
import EditarUsuarioCliente from './pages/EditarUsuarioCliente';
import EditarAdministrador from './pages/EditarAdmnistrador';
import CategoriaCelular from './pages/CategoriaCelular';
import CategoriaLaptop from './pages/CategoriaLaptop';
import CategoriaMonitores from './pages/CategoriaMonitores';
import CategoriaHardware from './pages/CategoriaHardware';
import CategoriaTablet from './pages/CategoriaTablet';
import CategoriaAuricular from './pages/CategoriaAuricular';
import CategoriaSmartwatch from './pages/CategoriaSmartwatch';
import VistaCanRem from './pages/VistaCanRem';
import CamCorreo from './pages/CamCorreo';
import SalirCuenta from './pages/SalirCuenta';
import RoboCuenta from './pages/RoboCuenta';
import CargoDesc from './pages/CargoDesc';
import PierdoTelef from './pages/PierdoTelef';
import CrearCategoria from './pages/CrearCategoria';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import InicioAdmin from './pages/IncioAdmin';
import LoginAdmin from './pages/LoginAdmin';
import PerfilAdmin from './pages/PerfilAdmin';
import AdministrarProductosAdmin from './pages/AdministrarProdcutosAdmin';
import AdministrarCategoriasAdmin from './pages/AdministrarCategoriasAdmin';
import AdministrarCategoriasProductosAdmin from './pages/AdministrarCategoriasProductos';
import ProtectedRouteAdmin from './ProtectedRouteAdmin';
import EditarCategoria from './pages/EditarCategoria';
import CreateProductoCat from './pages/CrearProductoCategoria';
import EditarProductosCategorias from './pages/EditarProductosCategorias';
import AdministrarVendedoresAdmin from './pages/AdministrarVendedoresAdmin';
import CreacionVendedor from './pages/RegistroVendedor';
import EditRegistroVendedor from './pages/EditarVendedor';
import LoginVendedor from './pages/LoginVendedor';
import ProtectedRouteVendedor from './ProtectedRouteVendedor';
import PerfilVendedor from './pages/PerfilVendedor';
import EditarVendedorDefault from './pages/EditarVendedorDefault';
import ProductosVendedor from './components/ProductosVendedor'
import EditarProductosVendedor from './pages/EditarProductoVendedor';
import Pedidos from './components/Pedidos';
function App() {
  return (


    <AuthProvider>
      <BrowserRouter>
        <Encabezado />
        <Routes>

          <Route path='/LoginVendedor' element={<LoginVendedor />}></Route>
          <Route path='/' element={<Inicio />} ></Route>
          <Route path='/LoginAdmin' element={<LoginAdmin />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Registro' element={<Registro />}></Route>
          <Route path='/Nosotros' element={<Nosotros />}></Route>
          <Route path='/Productos' element={<Productos />}></Route>
          <Route path='/VistaProducto' element={<VistaProducto />}></Route>
          <Route path='/CategoriaCelular' element={<CategoriaCelular />} ></Route>
          <Route path='/CategoriaLaptop' element={<CategoriaLaptop />}></Route>
          <Route path='/CategoriaMonitores' element={<CategoriaMonitores />}></Route>
          <Route path='/CategoriaHardware' element={<CategoriaHardware />}></Route>
          <Route path='/CategoriaTablet' element={<CategoriaTablet />}></Route>
          <Route path='/CategoriaAuricular' element={<CategoriaAuricular />}></Route>
          <Route path='/CategoriaSmartwatch' element={<CategoriaSmartwatch />}></Route>

          {/*Paginas protegiadas para el vendedor*/}
          <Route element={<ProtectedRouteVendedor />}>
          <Route path='/ModificarProductoVendedor' element={<EditarProductosVendedor />}></Route>
            <Route path='/EditarProductosVendedor' element={<ProductosVendedor />}></Route>
            <Route path='/PerfilVendedor' element={<PerfilVendedor />}></Route>
            <Route path='/EditVendedors' element={<EditarVendedorDefault />}></Route>
          </Route>

          {/*Paginas protegiadas para el administrador*/}
          <Route element={<ProtectedRouteAdmin />}>
            <Route path='/Usuarios' element={<InicioAdmin />}></Route>
            <Route path='/AdminProd' element={<AdministrarProductosAdmin />} ></Route>
            <Route path='/EditVendedor' element={<EditRegistroVendedor />}></Route>
            <Route path='/CreateVendedor' element={<CreacionVendedor />}></Route>
            <Route path='/AdministrarVendedores' element={<AdministrarVendedoresAdmin />}></Route>
            <Route path='/EditarCatProducto' element={<EditarProductosCategorias />}></Route>
            <Route path='/CreateCatProducto' element={<CreateProductoCat />}></Route>
            <Route path='/CategoriaProd' element={<AdministrarCategoriasProductosAdmin />}></Route>
            <Route path='/CategoriasAdmin' element={<AdministrarCategoriasAdmin />}></Route>
            <Route path='/PerfilAdmin' element={<PerfilAdmin />}></Route>
            <Route path='/CrearCategoria' element={<CrearCategoria />}></Route>
            <Route path='/EditarUsuario' element={<EditarUsuario />}></Route>
            <Route path='/EditarAdministrador' element={<EditarAdministrador />}></Route>
            <Route path='/AdministrarProductos' element={<AdministrarProductos />}></Route>
            <Route path='/EditarProductos' element={<EditarProductos />}></Route>
            <Route path='/CrearProducto' element={<CrearProducto />}></Route>
            <Route path='/EditarCategoria' element={<EditarCategoria />}></Route>
          </Route>

          {/*Paginas Protegidas para el cliente*/}
          <Route element={<ProtectedRoute />}>
            <Route path='/EditarUsuarioCliente' element={<EditarUsuarioCliente />}></Route>
            <Route path='/RecuperContraseña' element={<RecuperContraseña />}></Route>
            <Route path='/Perfil' element={<Perfil />}></Route>
            <Route path='/PasarelaPago' element={<PasarelaPago />}></Route>
            <Route path='/Ayuda' element={<Ayuda />}></Route>
            <Route path='/Config_cuenta' element={<ConfiCuenta />}></Route>
            <Route path='/Seguridad' element={<Seguridad />}></Route>
            <Route path='/VistaCanceRemb' element={<VistaCanRem />}></Route>
            <Route path='/CamCorreo' element={<CamCorreo />}></Route>
            <Route path='/SalirCuenta' element={<SalirCuenta />}></Route>
            <Route path='/RoboCuenta' element={<RoboCuenta />}></Route>
            <Route path='/CargoDesc' element={<CargoDesc />}></Route>
            <Route path='/PierdoTelef' element={<PierdoTelef />}></Route>
            <Route path='/Pedidos' element={<Pedidos />}></Route>

          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>

  );
}



export default App;
