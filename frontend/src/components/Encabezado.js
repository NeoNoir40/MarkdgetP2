import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";


function Encabezado() {
    return (
        <div>
            <header className="text-white bghead gap-5  top-0  w-auto">
                <nav>
                    <div>
                    <div className="flex flex-row ">    
                    </div>
                        
                    <div className="text-white bghead flex text-center flex-row items-center justify-center mt-2 ">
                        <h1 className="text-3xl flex text-center justify-center items-center mb-2 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl "><Link to="/"><box-icon name='home' type='solid' color='#ffffff'></box-icon>Markdget</Link></h1>
                    <Dropdown/>
                        {/*<Link to="/Perfil">Perfil</Link>*/}
                        <Link className="ml-4 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl" to="/Carrito">Carrito</Link>
                        <Link className="ml-4 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl" to="/Productos">Productos</Link>
                        <Link className="ml-4 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl" to="/Ayuda">Ayuda</Link>
                        <Link className="ml-4 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl" to="/Nosotros">Nosotros</Link>
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

//items-center text-center

export default Encabezado;

