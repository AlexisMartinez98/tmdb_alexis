import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../store/stateFavorite";

const ItemDetailMovie = ({ data }) => {
  // const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  console.log(userData.user.username);
  const dbId = useLocation().pathname.split("/")[3];
  const { original_name, poster_path, last_air_date, name, homepage } = data;
  const baseUrl = "https://image.tmdb.org/t/p/original";

  // const handleAddToFavorites = () => {
  //   const data = {
  //     username: userData.user.username,
  //     category: "tv",
  //     id: dbId,
  //   };
  //   dispatch(addFavorite(data));
  // };

  return (
    <div className="flex items-center justify-center rounded overflow-hidden shadow-lg mb-5 h-[790px]">
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
        {/* <button
          className="bg-[#010024] hover:bg-[#01b4e4] text-white font-bold py-2 px-4 rounded mt-5"
          onClick={handleAddToFavorites}
        >
          Agregar a favoritos
        </button> */}
      </div>
    </div>
  );
};

export default ItemDetailMovie;
