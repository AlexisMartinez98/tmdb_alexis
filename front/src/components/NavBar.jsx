import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/user";
import { clearUser } from "../store/actions";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const NavBar = ({ search, setSearch }) => {
  const [buscador, setBuscador] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    dispatch(clearUser());
    navigate("/category/movies");
    toast.success("Sesión cerrada");
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
        {userData.user === null ? (
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
            {/* {userData && userData.user && ( */}
            <Link
              to={`/user/${userData.user.username}`}
              className="block text-l mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline px-4 py-2 border-transparent rounded-md transition-colors hover:border-[#01b4e4] border-2 uppercase"
            >
              {userData.user.username}
            </Link>
            {/* )} */}
            <button
              className="block text-l mt-4 lg:inline-block lg:mt-0 font-bold text-white hover:text-[#01b4e4] mr-4 active:underline px-4 py-2 border-transparent rounded-md transition-colors hover:border-[#01b4e4] border-2"
              onClick={logout}
            >
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
      <Toaster />
    </nav>
  );
};

export default NavBar;
