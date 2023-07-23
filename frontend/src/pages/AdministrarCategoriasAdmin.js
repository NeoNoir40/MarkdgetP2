import React from "react";
import CategoriaTable from "../components/CategoriasTable";
import IndicadorPag from "../components/PagIndicador";


function AdministrarCategoriasAdmin (){
    return(
        <main className="min-h-screen">
        <div>
            <IndicadorPag
            
            TituloIndc={"Panel de administración de categorias"}

            />
            <div className="m-1">
            <CategoriaTable/>
            </div>
        </div>
        </main>
    );
}

export default AdministrarCategoriasAdmin;