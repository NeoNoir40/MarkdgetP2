import React from "react";
import ProductosAdmin from "../components/ProductosAdmin";
import IndicadorPag from "../components/PagIndicador";
import BotonGeneral from "../components/BontonGeneral";

function AdministrarProductosAdmin (){
    return(
        <main className="min-h-screen">
        <div>
            <IndicadorPag
            
            TituloIndc={"Panel de administración de productos"}

            />
            <div className="m-1">
               
            <ProductosAdmin/>
            </div>
            <BotonGeneral texto={"Crear Nuevo Producto"} link={"/CrearProducto"}/>
        </div>
        </main>
    );
}

export default AdministrarProductosAdmin;