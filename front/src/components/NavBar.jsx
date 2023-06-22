import React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar = ({ userData, setUserData, search, setSearch }) => {
  const [buscador, setBuscador] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    axios
      .post("http://localhost:3001/user/logout", null, {
        withCredentials: true,
      })
      .then((res) => {
        setUserData(null);
        if (userData) {
          Cookies.remove("token");
          navigate("/category/movies");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleBuscador = (e) => {
    setBuscador(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/search?query=${buscador}`)
      .then((res) => {
        setSearch(res.data);
      })
      .catch((err) => console.log(err));
  }, [buscador]);

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
            to="/category/movies"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline"
          >
            Peliculas
          </Link>
          <Link
            to="/category/tv"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline"
          >
            Tv-Show
          </Link>
        </div>
      </div>
      <Link to="/search" className="flex justify-center">
        <div className="buscador">
          <input
            type="text"
            placeholder="Buscar película"
            className="block text-xl mt-4 lg:inline-block lg:mt-0 font-bold text-white bg-transparent focus:outline-none focus:border-white border-b-2 border-transparent placeholder-white placeholder-opacity-50"
            onChange={handleBuscador}
          />
        </div>
      </Link>
      <div className="flex items-center">
        {!userData ? (
          <>
            <Link
              to="/user/login"
              className="block text-l mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline px-4 py-2 border-transparent rounded-md transition-colors hover:border-[#01b4e4] border-2"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/user/register"
              className="block text-l mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline px-4 py-2 border-transparent rounded-md transition-colors hover:border-[#01b4e4] border-2"
            >
              Registrarse
            </Link>
          </>
        ) : (
          <>
            <Link
              // to="/user/me"
              to={`/user/${userData.username}`}
              className="block text-l mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline px-4 py-2 border-transparent rounded-md transition-colors hover:border-[#01b4e4] border-2"
            >
              {userData.username}
            </Link>
            <button
              className="block text-l mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline px-4 py-2 border-transparent rounded-md transition-colors hover:border-[#01b4e4] border-2"
              onClick={logout}
            >
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
