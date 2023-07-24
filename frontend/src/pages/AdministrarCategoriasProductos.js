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
    <div>
    <CategoriasProductosTable/>
    </div>
           
            
            <BotonGeneral
            texto={'Crear Categoria Producto'}
            link={'/CreateCatProducto'}
            />
            
            
        </div>
        </main>
    );
}

export default AdministrarCategoriasProductosAdmin;