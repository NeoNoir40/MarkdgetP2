import logo from './logo.svg';
import './App.css';
import Contacto from './components/Contacto';
import Encabezado from './components/Encabezado';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './components/Nosotros';
import Carrito from './pages/Carrito';
import Login from './pages/Login';
import Registro from './pages/Registro';
import RecuperContraseña from './pages/RecuperarContraseña';
import Perfil from './components/Perfil'
import Productos from './pages/Productos';
import 'boxicons'
import Pasarela_pago from './pages/Pasarela_pago';
import Perfil_vendedor from './pages/Perfil_vendedor';
import Ayuda from './pages/Ayuda';
import ConfiCuenta from './pages/Conficuenta';
import Seguridad from './pages/Seguridad';
import VistaProducto from './pages/VistaProducto';
import AdministrarProductos from './pages/AdministrarProductos';
import EditarProducto from './pages/EditarProducto';
import CrearProducto from './pages/CrearProducto';
import EditarUsuario from './pages/EditarUsuario';
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

function App() {
  return (


<BrowserRouter>
<Routes>
  <Route path='/'element={<Inicio/>} ></Route>

  <Route path='/Carrito' element={<Carrito/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/Registro' element={<Registro/>}></Route>
  <Route path='/RecuperContraseña' element={<RecuperContraseña/>}></Route>
  <Route path='/Perfil' element={<Perfil/>}></Route>
  <Route path='/Nosotros' element={<Nosotros/>}></Route>
  <Route path='/Contacto' element={<Contacto/>}></Route>
  <Route path='/Productos' element={<Productos/>}></Route>
  <Route path='/Pasarela_Pago' element={<Pasarela_pago/>}></Route>
  <Route path='/Perfil_vendedor' element={<Perfil_vendedor/>}></Route>
  <Route path='/Ayuda' element={<Ayuda/>}></Route>
  <Route path='/Config_cuenta' element={<ConfiCuenta/>}></Route>
  <Route path='/Seguridad' element={<Seguridad/>}></Route>
  <Route path='/VistaProducto' element={<VistaProducto/>}></Route>
  <Route path='/AdministrarProductos' element={<AdministrarProductos/>}></Route>
  <Route path='/EditarProducto' element={<EditarProducto/>}></Route>
  <Route path='/CrearProducto' element={<CrearProducto/>}></Route>
  <Route path='/EditarUsuario' element={<EditarUsuario/>}></Route>
  <Route path='/EditarAdministrador' element={<EditarAdministrador/>}></Route>
  <Route path='/CategoriaCelular' element={<CategoriaCelular/>} ></Route>
  <Route path='/CategoriaLaptop' element={<CategoriaLaptop/>}></Route>
  <Route path='/CategoriaMonitores' element={<CategoriaMonitores/>}></Route>
  <Route path='/CategoriaHardware' element={<CategoriaHardware/>}></Route>
  <Route path='/CategoriaTablet' element={<CategoriaTablet/>}></Route>
  <Route path='/CategoriaAuricular' element={<CategoriaAuricular/>}></Route>
  <Route path='/CategoriaSmartwatch' element={<CategoriaSmartwatch/>}></Route>
  <Route path='/VistaCanceRemb' element={<VistaCanRem/>}></Route>
  <Route path='/CamCorreo' element={<CamCorreo/>}></Route>
  <Route path='/SalirCuenta' element={<SalirCuenta/>}></Route>
  <Route path='/RoboCuenta' element={<RoboCuenta/>}></Route>
  <Route path='/CargoDesc' element={<CargoDesc/>}></Route>
  <Route path='/PierdoTelef' element={<PierdoTelef/>}></Route>
  <Route path='/CrearCategoria' element={<CrearCategoria/>}></Route>
</Routes>
</BrowserRouter>

  );
}



export default App;
