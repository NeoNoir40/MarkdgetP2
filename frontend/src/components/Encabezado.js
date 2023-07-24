// Encabezado.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BiHomeHeart } from "react-icons/bi";

function Encabezado() {
  const { isAuthenticated, logoutAdmin, logout, logoutVendedor,isAuthenticatedAdmin , isAuthenticatedVendedor } = useAuth();

  return (
    <div>
      <header className="text-white bghead gap-5 top-0 w-auto">
        <nav>
          <div>
            <div className="flex flex-row "></div>

            <div className="text-white bghead flex text-center flex-row items-center justify-center mt-2 ">

              <h1 className="text-3xl flex text-center justify-center items-center mb-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl ">   <Link to="/">
                <BiHomeHeart />
              </Link>Markdget

              </h1>

              {isAuthenticated || isAuthenticatedAdmin || isAuthenticatedVendedor ? (
                <>
                  {isAuthenticatedAdmin ? ( // Si es administrador, muestra el navbar de admin
                    <>
                      {/* Enlaces para usuarios administradores */}
                      <Link to="/PerfilAdmin" className="text-white">
                        Admin
                      </Link>
                      <Link to="/DashboardAdmin" className="text-white">
                        Dashboard de Admin
                      </Link>
                      <Link to="/" className="text-white" onClick={logoutAdmin}>
                        Logout
                      </Link>
                    </>
                  ) : isAuthenticatedVendedor ? ( // Si es vendedor, muestra el navbar de vendedor
                    <>
                      {/* Enlaces para vendedores */}
                      <Link to="/PerfilVendedor" className="text-white">
                        Vendedor
                      </Link>
                      {/* Agrega aquí los enlaces adicionales para el navbar de vendedor */}
                      <Link to="/" className="text-white" onClick={logoutVendedor}   >
                        Logout
                      </Link>
                    </>
                  ) : ( // Si no es administrador ni vendedor, muestra el navbar de cliente
                    <>
                      {/* Enlaces para usuarios clientes */}
                      <Link to="/Perfil" className="text-white">
                        Perfil
                      </Link>
                      <Link to="/Carrito" className="text-white">
                        Carrito
                      </Link>
                      <Link to="/Productos" className="text-white">
                        Productos
                      </Link>
                      <Link to="/Ayuda" className="text-white">
                        Ayuda
                      </Link>
                      <Link to="/Nosotros" className="text-white">
                        Nosotros
                      </Link>
                      <Link to="/" className="text-white" onClick={logout}>
                        Logout
                      </Link>
                    </>
                  )}
                </>
              ) : ( // Si no está autenticado, muestra el navbar para usuarios no autenticados
                <>
                  {/* Enlaces para usuarios no autenticados */}
                  <Link to="/Login" className="text-white">
                    Iniciar Sesión
                  </Link>
                  <Link to="/Carrito" className="text-white">
                    Carrito
                  </Link>
                  <Link to="/Productos" className="text-white">
                    Productos
                  </Link>
                  <Link to="/Ayuda" className="text-white">
                    Ayuda
                  </Link>
                  <Link to="/Nosotros" className="text-white">
                    Nosotros
                  </Link>
                </>
              )}



              <form className="" method="get">
                <input type="search" className="text-black ml-3 rounded-md" placeholder="Buscar"></input>
              </form>

            </div>
            <div className="rectangulo bg-white h-1 flex items-center justify-between mt-2 mx-auto w-3/4"></div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Encabezado;
