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
import { clientesView } from "../api/auth";

function TablaClientes() {
  const [clientes, setClientes] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    const listaClientes = async () => {
      try {
        const resultado = await clientesView();
        setClientes(resultado.data);
      } catch (error) {
        console.log("no se pudo obtener", error);
      }
    };
    listaClientes();
  }, []);

  useEffect(() => {
    if (tableRef.current && clientes.length > 0 && !$.fn.DataTable.isDataTable(tableRef.current)) {
      $(tableRef.current).DataTable({
        buttons: {
          name: "danger",
          buttons: ["copy", "csv","print"],
        },
        dom:
          '<"row"<"col-md-4"l><"col-md-4"B><"col-md-4"f>><"clear">t<"row"<"col-md-6"i><"col-md-6"p>>',
        pageLength: 10, // Mostrar 10 registros por página
      });
    }
  }, [clientes]);

  return (
    <div>
      <div className="text-center flex justify-center mt-10">
        <table ref={tableRef} className="table table-striped text-bold w-[250px]">
          <thead>
            <tr>
              <th className=" ">#</th>
              <th className="">Nombre</th>
              <th className="">Email</th>
              <th className="">Contraseña</th>
              <th className="">Direccion</th>
              <th className="">Ciudad</th>
              <th className="">Estado</th>
              <th className="">Pais</th>
              <th className="">eliminar</th>
              <th className="">upgrade</th>
            </tr>
          </thead>
          <tbody className="">
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td className="">{cliente.id}</td>
                <td className="">{cliente.nombre}</td>
                <td className="">{cliente.email}</td>
                <td className="">{cliente.contrasena}</td>
                <td className="">{cliente.direccion}</td>
                <td className="">{cliente.ciudad}</td>
                <td className="">{cliente.estado}</td>
                <td className="">{cliente.pais}</td>
                <td className="">delete</td>
                <td className="">upgrade</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablaClientes;
