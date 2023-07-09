import React from "react";
import { Link } from "react-router-dom";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import BotonGeneral from "../components/BontonGeneral";
import { useState } from "react";
import axios from "axios";

function Registro() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [estado, setEstado] = useState("");
    const [pais , setPais] = useState("");
    const [contraseña, setContrasena] = useState("");

    const crearUser = () => {
        
        axios.get(`http://localhost:3001/api/clientes?email=${email}`)
            .then(response => {
                if (response.data.length > 0) {  
                    alert("El correo electrónico ya está registrado");
                } else {
                    axios.post("http://localhost:3001/api/clientes", {
                        nombre: nombre,
                        email: email,
                        direccion: direccion,
                        ciudad: ciudad,
                        estado: estado,
                        contrasena: contraseña,
                        pais: pais
                    })
                    .then(() => {
                        alert("Se registró correctamente");
                        window.location.href = "/";
                    })
                    .catch(() => {
                        alert("Hubo un error durante el registro");
                    })
                }
            })
            

            


    };
    

    return (
        <main>
            <Encabezado />

            <div className="min-h-screen flex justify-center items-center text-center">

                <div className="flex flex-col items-center bg-[#222222] p-8 rounded-lg">
                    <h1 className="font-bold text-white "><box-icon name='user' color='#ffffff' ></box-icon>Registro</h1>
                    <form action="" method="POST">
                        <div className="text-white flex flex-col ">

                            <label for="nombre" className="mt-5">Nombre</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" name="nombre" id="nombre" required placeholder="Ejemplo: MK@gmail.com"

                                onChange={(event) => {

                                    setNombre(event.target.value);
                                }}

                            />

                            <label for="email" className="mt-5 ">Correo Electrónico</label>
                            <input className="w-80 h-10 rounded-md text-black" type="email" name="email" id="nombre" required placeholder="Ejemplo: MK@gmail.com"

                                onChange={(event) => {

                                    setEmail(event.target.value);
                                }}

                            />

                            <label for="direccion" className="mt-5 ">Dirección</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" name="direccion" id="nombre" required placeholder="Ejemplo: calle: luna , mz0, cp1000"

                                onChange={(event) => {

                                    setDireccion(event.target.value);
                                }}

                            />

                            <label for="ciudad" className="mt-5 ">Ciudad</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" name="ciudad" id="nombre" required placeholder="Ejemplo: Merida"
                                onChange={(event) => {

                                    setCiudad(event.target.value);
                                }}

                            />

                            <label for="estado" className="mt-5 ">Estado</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" name="estado" id="nombre" required placeholder="Ejemplo: Yucatan"
                                onChange={(event) => {

                                    setEstado(event.target.value);
                                }}

                            />


                            <label for="pais" className="mt-5 ">Pais</label>
                            <input className="w-80 h-10 rounded-md text-black" type="text" name="pais" id="nombre" required placeholder="Ejemplo: Mexico"
                                onChange={(event) => {

                                    setPais(event.target.value);
                                }}

                            />

                            <label for="contraseña" className="mt-5 ">Contraseña</label>
                            <input className="w-80 h-10 rounded-md text-black" type="password" name="contrasena" id="passwrd" required placeholder="Contraseña"
                                onChange={(event) => {

                                    setContrasena(event.target.value);
                                }}

                            />
                        </div>
                        <div className="text-[#9B03A8] mt-4">
                        </div>

                        

                        <BotonGeneral texto={"Confirmar registro"} funcion={crearUser} link={''}/>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Registro;