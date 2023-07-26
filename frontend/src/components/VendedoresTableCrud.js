import React, { useEffect, useState, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5/js/dataTables.bootstrap5.min.js";
import "datatables.net-buttons/js/dataTables.buttons.min.js";
import "datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js";
import "jszip/dist/jszip.min.js";
import "pdfmake/build/pdfmake.min.js";
import "pdfmake/build/vfs_fonts.js";
import "datatables.net-buttons/js/buttons.html5.min.js";
import "datatables.net-buttons/js/buttons.print.min.js";
import { useNavigate } from "react-router-dom";
import  {deleteVendedor} from "../api/auth";
import { viewVendores } from "../api/auth";

function VendedoresTable() {
    const [vendedores, setVendedor] = useState([]);
    const tableRef = useRef(null);
    const navigate = useNavigate(); // Utilizamos useNavigate en lugar de useHistory    


    useEffect(() => {
        const listaVendedor = async () => {
            try {
                const resultado = await viewVendores();
                setVendedor(resultado.data);
            } catch (error) {
                console.log("no se pudo obtener", error);
            }
        };
        listaVendedor();
    }, []);

    useEffect(() => {
        if (tableRef.current && vendedores.length > 0 && !$.fn.DataTable.isDataTable(tableRef.current)) {
            $(tableRef.current).DataTable({
                buttons: {
                    name: "danger",
                    buttons: ["copy", "csv", "print"],
                },
                dom:
                    '<"row"<"col-md-4"l><"col-md-4"B><"col-md-4"f>><"clear">t<"row"<"col-md-6"i><"col-md-6"p>>',
                pageLength: 10, // Mostrar 10 registros por página
            });
        }
    }, [vendedores]);


 const handleEditarVendedor = (idVendedor) => {
        // Redireccionar a la página de edición de productos con el idVendedor como parámetro
        navigate(`/EditVendedor?id=${idVendedor}`);
    };


    const handleEliminarVendedor = async (idVendedor) => {
        try {
            await deleteVendedor(idVendedor);
            alert("Vendedor eliminado correctamente");

            const resultado = await viewVendores();
            setVendedor(resultado.data);
        }catch (error) {
            console.log("Error al eliminar el vendedor", error);
        }
    };

    return (
        <div>
            <div className="text-center flex justify-center mt-10">
                <table ref={tableRef} className="table table-striped text-bold w-[250px]">
                    <thead>
                        <tr>
                            <th className=" ">#</th>
                            <th className="">Nombre</th>
                            <th className="">Email</th>
                            <th className="">descripcion</th>
                            <th className="">eliminar</th>
                            <th className="">upgrade</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {vendedores.map((vendedores, i) => (
                            <tr key={vendedores.id}>
                                <td className="">{i + 1}</td>
                                <td className="">{vendedores.nombre}</td>
                                <td className="">{vendedores.email}</td>
                                <td className="">{vendedores.descripcion}</td>
                                <td><button onClick={() => handleEliminarVendedor(vendedores.id_vendedor)}>Eliminar</button></td>
                                <td><button onClick={() =>  handleEditarVendedor (vendedores.id_vendedor)}>Editar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VendedoresTable;
