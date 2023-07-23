import React from "react";
import BotonGeneral from "../components/BontonGeneral";

function PerfilAdmin() {
    return (
        <main>

            <div className=" min-h-screen ">
                <div className=" text-center bottom-0 text-5xl h-1 p-6 text-fuchsia-700  font-bold mt-10">
                    <h1>Admin</h1>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-[#ffffff] m-10 ml-5 w-[100] h-96 rounded-2xl">
                        <p className=" text-fuchsia-700 text-3xl ml-10 mt-5">Información de la tienda</p>
                        <p className=" text-lg ml-5">
                            <span className="text-fuchsia-700"><br />Nombre: </span><span>Gadgets de cancun</span>
                        </p>
                        <p className=" text-lg ml-5">
                            <span className=" text-fuchsia-700"> <br /> Fecha de inicio: </span><span>11-06-23</span>
                        </p>
                        <p className=" text-lg ml-5">
                            <span className="text-fuchsia-700"> <br /> Correo electrónico: </span><span className=" mr-5">markdget@markdget.com</span>
                        </p>
                        <p className=" text-lg ml-5">
                            <span className="text-fuchsia-700"> <br /> Número telefónico: </span><span>10239120-9312</span>
                        </p>
                        <p className=" text-lg ml-5">
                            <span className=" text-fuchsia-700"> <br /> Cantidad de productos: </span><span>10</span>
                        </p>
                    </div>
                  
                </div>
                <div className="flex flex-row justify-center ">

                    <div className=" m-3">
                        <BotonGeneral
                            texto={"Administrar Usuarios"} link={'/Usuarios'}
                        />
                    </div>
                    
                    <div className=" m-3">
                        <BotonGeneral
                            texto={"Administrar Vendedores"} link={'/Usuarios'}
                        />
                    </div>

                    <div className=" m-3">
                        <BotonGeneral
                            texto={"Administrar Categorias"} link={'/CategoriasAdmin'}
                        />
                    </div>

                    <div className=" m-3">
                        <BotonGeneral
                            texto={"Administrar productos"} link={'/AdminProd'}
                        />
                    </div>
                    

                    <div className=" m-3">
                        <BotonGeneral
                            texto={"Administrar productos categoria"} link={'/CategoriaProd'}
                        />
                    </div>
                    

                    <div className=" m-3">
                        <BotonGeneral
                            texto={"Log out"}
                        />
                    </div>
                </div>
            </div>

        </main>
    );
}

export default PerfilAdmin;