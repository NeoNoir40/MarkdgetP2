import React from "react";
import IncioAdminCard from "../components/IncioAdminCard";
import IndicadorPag from "../components/PagIndicador";

function InicioAdmin() {
    return (
        <main className="min-h-screen">
            <div>

                <IndicadorPag

                    TituloIndc={"Panel de administración de usuarios"}

                />

                <div className="m-1">
                    <IncioAdminCard />
                </div>
            </div>
        </main>
    );
}

export default InicioAdmin;