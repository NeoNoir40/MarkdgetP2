import React from "react";
import CategoriaTable from "../components/CategoriasTable";
import IndicadorPag from "../components/PagIndicador";
import BotonGeneral from "../components/BontonGeneral";

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
            <BotonGeneral
            link={"/CrearCategoria"}
            texto={"Agregar categoria"}
            />
        </div>
        </main>
    );
}

export default AdministrarCategoriasAdmin;