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
                    <table className="bg-white ">
                        <thead>
                            <tr>
                                <th className="dos ">#</th>
                                <th className="uno">Nombre</th>
                                <th className="dos">Email</th>
                                <th className="uno">Contraseña</th>
                                <th className="dos">Direccion</th>
                                <th className="uno">Ciudad</th>
                                <th className="dos">Estado</th>
                                <th className="uno">Pais</th>
                                <th className="dos">eliminar</th>
                                <th className="uno">upgrade</th>
                            </tr>
                        </thead>
                        <tbody className="bordetabla">
                            {clientes.map((cliente) => (
                                <tr key={cliente.id }>
                                    <td className="bordetabla">{cliente.id}</td>
                                    <td className="bordetabla">{cliente.nombre}</td>
                                    <td  className="bordetabla">{cliente.email}</td>
                                    <td  className="bordetabla">{cliente.contrasena}</td>
                                    <td  className="bordetabla">{cliente.direccion}</td>
                                    <td  className="bordetabla">{cliente.ciudad}</td>
                                    <td  className="bordetabla">{cliente.estado}</td>
                                    <td className="bordetabla">{cliente.pais}</td>
                                    <td className="bordetabla">delete</td>
                                    <td  className="bordetabla">upgrade</td>
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
