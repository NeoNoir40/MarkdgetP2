import React from 'react';
import { Link } from 'react-router-dom';

function CardOfert({text,imagen}) {
    return(
        <div className=' flex flex-row hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl'>
            <div className='rounded-[15px_0px_0px_15px] pt-4 bg-white w-64 items-center text-center justify-center max-w-2xl mx-auto text-semibold mr-0'>
                <Link><h1 className='text-3xl text-[#9B03A8] font-bold'>{text}</h1></Link>
            </div>
            <div className='rounded-[0px_15px_15px_0px] pt-4 bg-white w-48 items-center text-center justify-center max-w-2xl mx-auto text-semibold ml-0 object-cover'>
                <Link><img  src={imagen}/></Link>
            </div>
        </div>
    )
    
}

export default CardOfert;