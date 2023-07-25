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
import { getProductosVendedorPorId, EliminarProducto } from "../api/auth";

function ProductosVendedor() {
  const [Productos, setProductos] = useState([]);
  const tableRef = useRef(null);
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id"); // Obtener el ID del vendedor desde la URL

  useEffect(() => {
    const obtenerProductosPorId = async () => {
      try {
        const resultado = await getProductosVendedorPorId(id);
        setProductos(resultado); // Actualiza el estado con la lista de productos
      } catch (error) {
        console.log("No se pudo obtener la lista de productos", error);
      }
    };

    if (id) {
      obtenerProductosPorId();
    }
  }, [id]);

  useEffect(() => {
    // Inicializar DataTables cuando la tabla y los datos estén listos
    if (tableRef.current && Productos.length > 0 && !$.fn.DataTable.isDataTable(tableRef.current)) {
      $(tableRef.current).DataTable({
        buttons: {
          name: "danger",
          buttons: ["copy", "csv", "print"],
        },
        dom: '<"row"<"col-md-4"l><"col-md-4"B><"col-md-4"f>><"clear">t<"row"<"col-md-6"i><"col-md-6"p>>',
        pageLength: 10, // Mostrar 10 registros por página
      });
    }
  }, [Productos]);

  const handleEditarProducto = (idProductoVendedor) => {
    navigate(`/ModificarProductoVendedor?id=${idProductoVendedor}`);
  };

  const handleEliminarProducto = async (idProductoVendedor) => {
    try {
      await EliminarProducto(idProductoVendedor);
      alert("Producto eliminado correctamente");
      window.location.reload();
      // Volver a cargar la lista de productos después de eliminar uno
      const resultado = await getProductosVendedorPorId(idProductoVendedor);
      setProductos(resultado);
    } catch (error) {
      console.error("Error al eliminar el producto", error);
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
              <th className="">Descripcion</th>
              <th className="">Precio</th>
              <th className="">Imagen</th>
              <th className="">Stock</th>
              <th className="">eliminar</th>
              <th className="">upgrade</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(Productos) &&
              Productos.map((producto, i) => (
                <tr key={producto.id_producto}>
                  <td>{i + 1}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.imagen}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <button onClick={() => handleEliminarProducto(producto.id_producto)}>Eliminar</button>
                  </td>
                  <td>
                    <button onClick={() => handleEditarProducto(producto.id_producto)}>Editar</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductosVendedor;
