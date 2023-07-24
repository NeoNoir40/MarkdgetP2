import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
import { EliminarCategoria } from "../api/auth";
import { viewCategorias } from "../api/auth";

function CategoriaTable() {
    const [Categorias, setCategoria] = useState([]);
    const tableRef = useRef(null);
    const navigate = useNavigate(); // Utilizamos useNavigate en lugar de useHistory    

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

    const handleEditarCategoria = (idCategoria) => {
        // Redireccionar a la página de edición de productos con el idCategoria como parámetro
        navigate(`/EditarCategoria?id=${idCategoria}`);
    };

    const handleEliminarCategoria = async (idCategoria) => {
        try {
            await EliminarCategoria(idCategoria);
            alert("Categoria eliminado correctamente");
            
            // Volver a cargar la lista de productos después de eliminar uno
            const resultado = await viewCategorias();
            setCategoria(resultado.data);
        } catch (error) {
            console.error("Error al eliminar la categoria", error);
        }
    };

    return (
        <div>
            <div className="text-center flex justify-center mt-10 table-responsive">
                <table ref={tableRef} className="table table-striped text-bold w-[250px]">
                    <thead>
                        <tr>
                            <th className=" ">#</th>
                            <th className="">Nombre</th>
                            <th className="">Imagen</th>
                            <th className="">eliminar</th>
                            <th className="">upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Categorias.map((categoria, i) => (
                            <tr key={categoria.id}>
                                <td>{i++}</td>
                                <td>{categoria.nombre}</td>
                                <td>{categoria.imagen_categoria}</td>
                                <td><button onClick={() => handleEliminarCategoria(categoria.id_categoria)}>Eliminar</button></td>
                                <td><button onClick={() => handleEditarCategoria(categoria.id_categoria)}>Editar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoriaTable;
