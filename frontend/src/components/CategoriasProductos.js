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
import { viewCategoriasProductos , deleteProductoCategoria} from "../api/auth";


function CategoriasProductosTable() {
    const [CategoriasProductos, setCategoriaProducto] = useState([]);
    const tableRef = useRef(null);
    const navigate = useNavigate(); // Utilizamos useNavigate en lugar de useHistory    


    useEffect(() => {
        const listaCategoriasProductos = async () => {
            try {
                const resultado = await viewCategoriasProductos();
                setCategoriaProducto(resultado.data);
            } catch (error) {
                console.log("no se pudo obtener", error);
            }
        };
        listaCategoriasProductos();
    }, []);

    useEffect(() => {
        if (tableRef.current && CategoriasProductos.length > 0 && !$.fn.DataTable.isDataTable(tableRef.current)) {
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
    }, [CategoriasProductos]);

    const handleEditarCategoriaProducto = (idCategoriaProducto) => {
        // Redireccionar a la página de edición de productos con el idCategoriaProducto como parámetro
        navigate(`/EditarCatProducto?id=${idCategoriaProducto}`);
    };

    const handleEliminarProductoCategoria = async (idCategoria) => {
        try {
            await deleteProductoCategoria(idCategoria);
            alert("Relacion categoria producto eliminado correctamente");
            
            // Volver a cargar la lista de productos después de eliminar uno
            const resultado = await viewCategoriasProductos();
            setCategoriaProducto(resultado.data);
        } catch (error) {
            console.error("Error al eliminar la relacion categoria producto", error);
        }
    };


    return (
        <div>
            <div className="text-center flex justify-center mt-10 table-responsive">
                <table ref={tableRef} className="table table-striped text-bold w-[250px]">
                    <thead>
                        <tr>
                            <th className=" ">#</th>
                            <th className="">Nombre Producto</th>
                            <th className="">Nombre Categoria</th>
                            <th className="">imagen_categoria</th>
                            <th className="">eliminar</th>
                            <th className="">upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CategoriasProductos.map((CategoriasProducto, i ) => (
                            <tr key={CategoriasProducto.id}>
                                <td>{i + 1}</td>
                                <td>{CategoriasProducto.nombre_producto}</td>
                                <td>{CategoriasProducto.nombre_categoria}</td>
                                <td>{CategoriasProducto.imagen_categoria}</td>
                                <td><button onClick={() => handleEliminarProductoCategoria(CategoriasProducto.id_producto_categoria)}>Editar</button></td>
                                <td><button onClick={() => handleEditarCategoriaProducto(CategoriasProducto.id_producto_categoria)}>Eliminar</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoriasProductosTable;
