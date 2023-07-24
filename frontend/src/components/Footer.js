import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
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
                        <BiLogoTwitter />
                        <BiLogoFacebookSquare />
                        <BiLogoInstagram />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

