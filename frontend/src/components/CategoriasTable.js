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

import { viewCategorias } from "../api/auth";

function CategoriaTable() {
    const [Categorias, setCategoria] = useState([]);
    const tableRef = useRef(null);

    useEffect(() => {
        const listaCategorias = async () => {
            try {
                const resultado = await viewCategorias();
                setCategoria(resultado.data);
            } catch (error) {
                console.log("no se pudo obtener", error);
            }
        };
        listaCategorias();
    }, []);

    useEffect(() => {
        if (tableRef.current && Categorias.length > 0 && !$.fn.DataTable.isDataTable(tableRef.current)) {
            $(tableRef.current).DataTable({
                buttons: {
                    name: "danger",
                    buttons: ["copy", "csv", "excel", "print"],
                },
                dom:
                    '<"row"<"col-md-4"l><"col-md-4"B><"col-md-4"f>><"clear">t<"row"<"col-md-6"i><"col-md-6"p>>',
                pageLength: 10, // Mostrar 10 registros por página
            });
        }
    }, [Categorias]);

    return (
        <div>
            <div className="text-center flex justify-center mt-10 table-responsive">
                <table ref={tableRef} className="table table-striped text-bold w-[250px]">
                    <thead>
                        <tr>
                            <th className=" ">#</th>
                            <th className="">Nombre</th>
                            <th className="">eliminar</th>
                            <th className="">upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Categorias.map((categoria , i) => (
                            <tr key={categoria.id}>
                                <td>{i ++}</td>
                                <td>{categoria.nombre}</td>
                                <td>delete</td>
                                <td>upgrade</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoriaTable;
