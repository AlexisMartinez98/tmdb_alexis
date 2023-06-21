import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({ data }) => {
  console.log(data);
  return (
    // <div className="flex items-center justify-center rounded overflow-hidden shadow-lg mb-5">
    //         <div className='border-r border-gray-200'>
    //             <img className="img-producto-detallado w-full" src={data.imageSrc} alt={data.imageAlt}/>
    //         </div>

    //         <div className='flex flex-col p-4'>
    //             <div className="px-6 py-4">
    //                 <h1 className="font-bold text-2xl mb-10 text-center">
    //                     {data.name}
    //                 </h1>
    //                 <h2 className='text-center text-xl font-light p-5 mb-5'>{data.description}</h2>
    //                 <h3 className="text-gray-700 font-bold text-center text-3xl">
    //                     $ {data.price} <span className='text-[#00a650] font-medium text-xl'>10% OFF</span>
    //                 </h3>
    //             </div>
    //             <div className="px-6 flex justify-around">
    //                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 opacity-40">Stock: {data.stock}</span>
    //                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 opacity-40">Id: {data.id}</span>
    //             </div>
    //             <div className='mt-7'>
    //                 <Count item={data} onAdd={onAdd}/>
    //             </div>
    //         </div>
    //     </div>
    <h1>hola</h1>
  );
};

export default ItemDetail;
