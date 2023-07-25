import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
            <footer className="bgfoot bottom-0  w-full mt-10">'
                <div>
                    <div className="text-white ml-1 ">
                        <Link to="/" className="ml-4">Email : markdget@hotmail.com</Link>
                        
                        <Link className="ml-4" to="">Politicas de privacidad</Link>
                        <div>
                            <Link className="ml-4" to="/Contacto">Telefono: 123908131831</Link>
                            <Link className="ml-16" to="/Ayuda">Soporte</Link>
                        </div>
                        <div className=" flex flex-row-reverse ">
                            <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
                            <box-icon name='facebook-square' type='logo' color='#ffffff' ></box-icon>
                            <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;

{/* <div>
            <footer className="bgfoot  w-full mt-10">'
                <div>
                    <div className="text-white ml-1 ">
                        <Link to="/" className="ml-4">Email : markdget@hotmail.com</Link>
                        
                        <Link className="ml-4" to="/Ayuda">Politicas de privacidad</Link>
                        <div>
                            <Link className="ml-4" to="/Contacto">Telefono: 123908131831</Link>
                            <Link className="ml-16" to="/Nostros">Soporte</Link>
                        </div>
                        <div className=" flex flex-row-reverse ">
                            <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
                            <box-icon name='facebook-square' type='logo' color='#ffffff' ></box-icon>
                            <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
                            <box-icon name='linkedin-square' type='logo' color='#ffffff' ></box-icon>
                        </div>
                    </div>
                </div>
            </footer>
        </div>*/}