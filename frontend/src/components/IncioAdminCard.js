import { useEffect , useState } from "react";
import React from "react";
import { clientesView  } from '../api/auth'

function IncioAdminCard() {

    function TablaClientes(){
        const [clientes, setClientes] = useState([])
        
        useEffect(() => {
            const listaClientes = async () => {
                try {
                    const resultado = await clientesView()
                    setClientes(resultado.data)
                } catch (error) {
                    console.log('no se pudo obtener', error);
                }
            };
            listaClientes();
        }, []);

        return (
            <div>
                <div className="text-center flex justify-center mt-10">
                    <table className="table table-striped text-bold ">
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
                                <tr key={cliente.id }>
                                    <td className="">{cliente.id}</td>
                                    <td className="">{cliente.nombre}</td>
                                    <td  className="">{cliente.email}</td>
                                    <td  className="">{cliente.contrasena}</td>
                                    <td  className="">{cliente.direccion}</td>
                                    <td  className="">{cliente.ciudad}</td>
                                    <td  className="">{cliente.estado}</td>
                                    <td className="">{cliente.pais}</td>
                                    <td className="">delete</td>
                                    <td  className="">upgrade</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    return <TablaClientes />;
}

export default IncioAdminCard;
