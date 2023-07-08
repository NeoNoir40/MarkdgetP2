import React from "react";
import Encabezado from "../components/Encabezado";
import Footer from "../components/Footer";
import IndicadorPag from "../components/PagIndicador";
import CardAdminProducto from "../components/CardAdminProducto";
import imagen1 from '../img/car1.png'
import imagen2 from '../img/car2.png'
import imagen3 from '../img/car3.png'
import imagen4 from '../img/car4.png'
import BotonGeneral from "../components/BontonGeneral";


function AdministrarProductos() {
  return (

    <main>
      <div className="min-h-screen">
        <Encabezado />
        <div>
          <div className="text-center">
            <IndicadorPag TituloIndc={"Producto"} />
          </div>


          <div className=" flex flex-col">

            <div className="text-center">
              <BotonGeneral
                texto={"Añadir producto"}
                link={'/CrearProducto'}
              />
            </div>

            <div>
              <CardAdminProducto
                imagen={imagen1}
                nombre="Audifonos rosa"
                marca="Razer"
                color="Rosa"
                precio="100"
                linkEditar={'/EditarProducto'}
                linkEliminar={''}
                linkVer={'/VistaProducto'}
              />
            </div>
            <div>
              <CardAdminProducto
                imagen={imagen2}
                nombre="Kit Cargadores"
                marca="Apple"
                color="Negro/Rosa"
                precio="50"
                linkEditar={''}
                linkEliminar={''}
                linkVer={''}
              />
            </div>
            <div>
              <CardAdminProducto
                imagen={imagen3}
                nombre="Cargador Wire"
                marca="Samsung"
                color="Negro"
                precio="200"
                linkEditar={''}
                linkEliminar={''}
                linkVer={''}
              />
            </div>
            <div>
              <CardAdminProducto
                imagen={imagen4}
                nombre="Iphone 13"
                marca="Apple"
                color="Negro mate"
                precio="1230"
                linkEditar={''}
                linkEliminar={''}
                linkVer={''}
              />
            </div>



          </div>




        </div>
      </div>
      <Footer />
    </main>

  );
}

export default AdministrarProductos