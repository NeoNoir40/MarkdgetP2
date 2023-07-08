import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import CardProducto from "../components/CardProducto";
import BotonPagarCar from "../components/BotonPagarCar";
import imagen1 from '../img/car1.png';
import imagen2 from '../img/car2.png';
import imagen3 from '../img/car3.png';
import imagen4 from '../img/car4.png';
import IndicadorPag from "../components/PagIndicador";

function Carrito() {
    return (

        <main >
            <Encabezado />

            <div className=" min-h-screen text-center ">
                <IndicadorPag
                    icono={<box-icon name='cart' color='#ffffff ' size='md' />}
                    TituloIndc={"Carrito de compras"} />

                <div>


                    <div className=" flex flex-col">

                        <CardProducto
                            imagen={imagen1}
                            nombre="Audifonos rosa"
                            marca="Razer"
                            color="Rosa"
                            precio="100"
                        />
                    </div>

                    <div className="">
                        <CardProducto
                            imagen={imagen2}
                            nombre="Kit Cargadores"
                            marca="Apple"
                            color="Negro/Rosa"
                            precio="50"
                        />
                    </div>

                    <div className="">
                        <CardProducto
                            imagen={imagen3}
                            nombre="Cargador wireless"
                            marca="Samsung"
                            color="Negro"
                            precio="200"
                        />
                    </div>
                    <div className="">
                        <CardProducto
                            imagen={imagen4}
                            nombre="Iphone 13"
                            marca="Apple"
                            color="Negro mate"
                            precio="1230"
                        />

                    </div>

                    <BotonPagarCar
                        cantidad={"2"}
                        direccion={"Av Torres,Calle estelar,mz1,c31,75590"}
                        total={"100"}
                    />

                </div>
            </div>
            <Footer />
        </main>


    );
}

export default Carrito;