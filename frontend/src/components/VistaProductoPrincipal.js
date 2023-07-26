import React from "react";


function VistaProductoPrincipal({imagen}){
    return(
        <div className="object-cover item-center border h-[500px] w-[500px]  " >
        <div>
        <img className="bg-transparent  h-[500px] w-[500px] rounded-md pt-2 object-cover items-center justify-center max-w-auto m-auto mb-4 content-center mt-4 py-2 px-2 " alt="asdsa" src={imagen}/>
        </div>
    </div>
    );
}

export default VistaProductoPrincipal;