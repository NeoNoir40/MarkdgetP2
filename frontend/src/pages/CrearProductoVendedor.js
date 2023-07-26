import React, { useState } from "react";
import BotonGeneralRealizarAccion from "../components/BotonGeneralRealizarAccion";
import IndicadorPag from "../components/PagIndicador";
import { useAuth } from "../context/AuthContext";
import { useNavigate , useLocation } from "react-router-dom";

function CrearProductoVendedor() {
    const location = useLocation();
    const id_vendedor= new URLSearchParams(location.search).get("id");
    const navigate = useNavigate();
    const { newProducto } = useAuth();
    const [ProductosDatos, setProductosDatos] = useState({
        id_vendedor: id_vendedor, 
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
        stock: "",
    });



    const HandleChange = (e) => {
        const { name, value } = e.target;
        setProductosDatos({
            ...ProductosDatos,
            [name]: value,
        })
    }



    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            await newProducto(ProductosDatos);
            alert("Producto creado correctamente");
            console.log(ProductosDatos);
            navigate("/PerfilVendedor");
        } catch (error) {
            console.error("Error al crear el prodcuto ", error);
        }
    }


    return (

        <main>

            <div className="min-h-screen">
                <div>
                    <div className="text-center mt-4">
                        <IndicadorPag
                            TituloIndc={"Crear nuevo producto"}
                        />
                    </div>
                    <div className="bg-[#222222] w-[600px] m-auto  rounded-xl  ">
                        <form onSubmit={handleSumit}>
                            <div className=" flex flex-col  m-auto mt-[100px] p-10 ">

                                <label className="text-white">Nombre</label>
                                <input placeholder="Ingresa el nombre de tu producto" className=" rounded-sm "
                                    name="nombre"


                                    value={ProductosDatos.nombre}
                                    onChange={HandleChange}
                                />

                                <label className="text-white ">Descripcion</label>
                                <input className="h-[100px]  rounded-sm " placeholder="ingresa un descripcion del producto"

                                    name="descripcion"


                                    value={ProductosDatos.descripcion}
                                    onChange={HandleChange}

                                />

                                <label className="text-white">Precio</label>
                                <input type="number" placeholder="ingresa el precio" className=" rounded-sm"

                                    name="precio"


                                    value={ProductosDatos.precio}
                                    onChange={HandleChange}

                                />

                                {/*<label className="text-white">  Categorias</label>  <input className=" rounded-sm " placeholder="ingresa la categoria del producto" name=""></input>/*/}


                                <label className="text-white">Imagen</label>
                                <input type="file" className="text-white  rounded-sm "
                                    name="imagen"



                                    value={ProductosDatos.imagen}
                                    onChange={HandleChange}

                                />

                                <label className="text-white">Stock</label>
                                <input type="number" placeholder="ingresa la cantidad de stock" className=" rounded-sm"

                                    name="stock"


                                    value={ProductosDatos.precio}
                                    onChange={HandleChange}

                                />


                                <BotonGeneralRealizarAccion texto={"Enviar"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    );

}

export default CrearProductoVendedor;