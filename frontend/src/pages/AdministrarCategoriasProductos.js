import React from "react";

import IndicadorPag from "../components/PagIndicador";
import CategoriasProductosTable from "../components/CategoriasProductos";
import BotonGeneral from "../components/BontonGeneral";

function AdministrarCategoriasProductosAdmin (){
    return(
        <main className="min-h-screen">
        <div>
            <IndicadorPag
            
            TituloIndc={"Panel de administración de relacion productos categorias"}

            />

            <CategoriasProductosTable/>
            <div className="m-1">
           
            </div>
        </div>
        </main>
    );
}

export default AdministrarCategoriasProductosAdmin;