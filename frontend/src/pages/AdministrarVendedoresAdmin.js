import React from "react";

import IndicadorPag from "../components/PagIndicador";
import VendedoresTable from "../components/VendedoresTableCrud";
import BotonGeneral from "../components/BontonGeneral";

function AdministrarVendedoresAdmin (){
    return(
        <main className="min-h-screen">
        <div>
            <IndicadorPag
            
            TituloIndc={"Panel de administración de relacion productos categorias"}

            />
    <div>
    <VendedoresTable/>
    </div>
    
           
            
            <BotonGeneral
            texto={'Crear Categoria Producto'}
            link={'/CreateVendedor'}
            />
            
            
        </div>
        </main>
    );
}

export default AdministrarVendedoresAdmin;