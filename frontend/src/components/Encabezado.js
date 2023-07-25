// Encabezado.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BiHomeHeart } from "react-icons/bi";

function Encabezado() {
  const { isAuthenticated, logoutAdmin, logout, logoutVendedor, isAuthenticatedAdmin, isAuthenticatedVendedor } = useAuth();

  return (
    <div className="">
      <header className="text-white bghead gap-5 top-0 w-auto ">
        <nav className="">
          <div>
            <div className="flex flex-row "></div>

            <div className="text-white bghead flex text-center flex-row items-center justify-center mt-2 ">



              {isAuthenticated || isAuthenticatedAdmin || isAuthenticatedVendedor ? (
                <>
                  {isAuthenticatedAdmin ? ( // Si es administrador, muestra el navbar de admin
                    <>
                      {/* Enlaces para usuarios administradores */}
                      <h1 className="text-3xl flex text-center justify-center items-center mb-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl ">   <Link>
                        <BiHomeHeart />
                      </Link>Markdget

                      </h1>
                      <Link to="/PerfilAdmin" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Dashboard
                      </Link>
                      <Link to="/Usuarios" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Usuarios
                      </Link>
                      <Link to="/AdministrarVendedores" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Vendedores
                      </Link>
                      <Link to="/CategoriasAdmin" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Categorias
                      </Link>
                      <Link to="/AdminProd" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Productos
                      </Link>
                      <Link to="/CategoriaProd" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Producto&Categoria
                      </Link>
                      <Link to="/" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl hover:text-red-700" onClick={logoutAdmin}>
                        Logout
                      </Link>
                    </>
                  ) : isAuthenticatedVendedor ? ( // Si es vendedor, muestra el navbar de vendedor
                    <>
                      {/* Enlaces para vendedores */}
                      <h1 className="text-3xl flex text-center justify-center items-center mb-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl ">   <Link >
                        <BiHomeHeart />
                      </Link>Markdget

                      </h1>
                      <Link to="/PerfilVendedor" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Vendedor
                      </Link>
                      {/* Agrega aquí los enlaces adicionales para el navbar de vendedor */}
                      <Link to="/" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl" onClick={logoutVendedor}   >
                        Logout
                      </Link>
                    </>
                  ) : ( // Si no es administrador ni vendedor, muestra el navbar de cliente
                    <>
                      {/* Enlaces para usuarios clientes */}
                      <h1 className="text-3xl flex text-center justify-center items-center mb-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl ">   <Link to="/">
                        <BiHomeHeart />
                      </Link>Markdget

                      </h1>
                      <Link to="/Perfil" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Perfil
                      </Link>
                      <Link to="/Carrito" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Carrito
                      </Link>
                      <Link to="/Productos" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Productos
                      </Link>
                      <Link to="/Ayuda" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Ayuda
                      </Link>
                      <Link to="/Nosotros" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        Nosotros
                      </Link>
                      <Link to="/" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl hover:text-red-900 " onClick={logout}>
                        Logout
                      </Link>
                    </>
                  )}
                </>
              ) : ( // Si no está autenticado, muestra el navbar para usuarios no autenticados
                <>
                  {/* Enlaces para usuarios no autenticados */}
                  <h1 className="text-3xl flex text-center justify-center items-center mb-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl ">   <Link to="/">
                    <BiHomeHeart />
                  </Link>Markdget

                  </h1>
                  <Link to="/Login" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                    Iniciar Sesión
                  </Link>
                  <Link to="/Productos" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                    Productos
                  </Link>
                  <Link to="/Ayuda" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                    Ayuda
                  </Link>
                  <Link to="/Nosotros" className="text-white ml-3 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                    Nosotros
                  </Link>
                </>
              )}

            </div>
            <div className="rectangulo bg-white h-1 flex items-center justify-between mt-2 mx-auto w-3/4"></div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Encabezado;
