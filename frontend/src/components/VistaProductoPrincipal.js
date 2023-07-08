import React from "react";


function VistaProductoPrincipal({imagen}){
    return(
        <div className=" border h-[500px] w-[500px]  " >
        <div>
        <img className="object-cover rounded-xl content-center m-14  " src={imagen}/>
        </div>
    </div>
    );
}

export default VistaProductoPrincipal;