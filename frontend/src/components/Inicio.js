import React from "react";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import imgbtn1 from '../img/imgbtn1.jpg';
import imgbtn2 from '../img/imgbtn2.jpg';
import { Link } from "react-router-dom";
function Inicio() {
    return (
        <div>
            <main className="bgmain min-h-screen ">
                <Encabezado />
                <div>

                </div>

                <div className=" flex justify-center flex-wrap mx-auto mt-20 " >
                    <div className=" ">
                        <Link className="" to=""><img className=" w-65" src={img1} alt="" /></Link>
                        <Link className="ml-5" to=""><img className=" w-65" src={img2} alt="" /></Link>
                    </div>
                    <div className=" ml-10 ">
                        <Link className="" to=""><img className=" w-65" src={img3} alt="" /></Link>
                        <Link className="ml-5" to=""><img className="w-65" src={img4} alt="" /></Link>
                    </div>
                </div>
                <div className="bg-white max-w-xl rounded-xl flex justify-center mt-20 mx-auto text-white" style={{ backgroundImage: `url(${imgbtn1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div >
                        <div >
                            <h1 className="mt-3" >Disfruta de los beneficios de tener tu cuenta!</h1>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-fuchsia-900 rounded-md mt-8 text-white mb-3 py-2 px-2">Regístrate</button>
                        </div>
                    </div>
                </div>
                <div className="bg-black max-w-xl rounded-xl flex justify-center mt-10 mx-auto mb-10 text-white" style={{ backgroundImage: `url(${imgbtn2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div >
                        <div>
                            <h1 className="mt-3">Deseas formar parte de Markdget y vender productos? Contáctanos!</h1>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-fuchsia-900 rounded-md mt-4 text-white mb-3 py-2 px-2">Regístrate</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
        
    );
}

export default Inicio;