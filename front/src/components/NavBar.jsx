import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#010024]">
      <div className="flex items-center flex-shrink-0 text-white ml-5 my-5">
        <Link
          to="/"
          className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-red-600 mr-4 active:underline"
        >
          <img
            src="https://the-movie-database-dun.vercel.app/static/media/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.bb8aa703cb92c9aa31fc1e0b17850ed9.svg"
            alt="tmdlogoale"
            className="w-32"
          />
        </Link>
      </div>
      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/categoria/movies"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline"
          >
            Peliculas
          </Link>
          <Link
            to="/categoria/tv"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline"
          >
            Tv-Show
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="buscador">
          <input
            type="text"
            placeholder="Buscar película"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white bg-transparent focus:outline-none focus:border-white border-b-2 border-transparent placeholder-white placeholder-opacity-50"
          />
          <button className="absolute right-0 top-0 mt-4 mr-4">
            {/* Aquí puedes agregar un ícono de búsqueda */}
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <a
          href="/usuario/login"
          className="block text-l mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline px-4 py-2 border-transparent rounded-md transition-colors hover:border-[#01b4e4] border-2"
        >
          Iniciar Sesión
        </a>
        <a
          href="/usuario/register"
          className="block text-l mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline px-4 py-2 border-transparent rounded-md transition-colors hover:border-[#01b4e4] border-2"
        >
          Registrarse
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
