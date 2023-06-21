import React from "react";

const ItemDetailMovie = ({ data }) => {
  const { original_name, poster_path, last_air_date, name, homepage } = data;
  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="flex items-center justify-center rounded overflow-hidden shadow-lg mb-5 h-screen">
      <div className="border-r border-gray-200">
        <img
          className="w-auto h-auto"
          src={`${baseUrl}${poster_path}`}
          alt={original_name}
        />
      </div>
      <div className="flex flex-col p-4">
        <div className="px-6 py-4">
          <h1 className="font-bold text-2xl mb-10 text-center">{name}</h1>
          <h2 className="text-center text-xl font-light p-5 mb-5">
            {name}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            reprehenderit, blanditiis vitae minima temporibus, aliquam
            recusandae ratione tempore quod ullam aut? Quo facere delectus ad
            eum veniam possimus quod dignissimos.
            {homepage}
          </h2>
          <h3 className="text-gray-700 font-bold text-center text-3xl">
            <span className="text-[#00a650] font-medium text-l">
              Fecha de estreno:
            </span>{" "}
            {last_air_date}
          </h3>
        </div>
        {/* <div className='mt-7'>
                    <Count item={data} onAdd={onAdd}/>
                </div> */}
      </div>
    </div>
  );
};

export default ItemDetailMovie;
