import React from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { BiMoney } from "react-icons/bi";

import CardAyuda from "../components/CardAyuda";

function Ayuda() {
    return (
        <>

            <div className=" min-h-screen">
                <div className=" text-center text-5xl h-20 text-fuchsia-700 gap-14 font-bold mt-10">
                    <h1>Ayuda y Soporte</h1>
                </div>
                <p className=" text-2xl text-fuchsia-700 font-bold  ml-72">Tus compras</p>
                <CardAyuda
                    icon1={<BiSolidLockAlt />}
                    titulo={"Control y Cancelaciones de tus compras"}
                    descripcion={"Pagos, reclamar, modificar o cancelar"}
                    enviar={'/VistaCanceRemb'}
                    icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
                />
                <CardAyuda
                    icon1={<BiMoney />}
                    titulo={"Devolución y reembolso"}
                    descripcion={"Devolución de un producto o consulta para reembolso"}
                    enviar={'/VistaCanceRemb'}
                    icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
                />
                <p className=" text-2xl text-fuchsia-700 font-bold mt-5 ml-72">Tu cuenta</p>
                <CardAyuda
                    titulo={"Configuración de la cuenta"}
                    enviar={'/Config_cuenta'}
                    icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
                />
                <CardAyuda
                    titulo={"Seguridad"}
                    enviar={'/Seguridad'}
                    icon2={<box-icon name='right-arrow-alt' size="md"></box-icon>}
                />
            </div>

        </>
    );
}
export default Ayuda;