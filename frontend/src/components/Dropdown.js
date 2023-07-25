import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div >
            <button className="bg-transparent w-20 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl" onClick={handleToggle}>
                Perfil
            </button>
            {isOpen && (
                <ul className="dropdown-menu ">
                    <li className="hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        <Link to="/Perfil ">Mi Perfil</Link>
                    </li>
                    <li className="hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        <Link to="/Login">Login</Link>
                    </li>
                    <li className="hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl">
                        <Link to="/Perfil_Vendedor">Administrador</Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
