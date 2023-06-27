import fondo from "../assets/fondo2.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allFavorites } from "../store/userFavorites";
import { Link } from "react-router-dom";
import { removeFavorite } from "../store/stateFavorite";
import { Toaster, toast } from "react-hot-toast";

const User = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const { username, email } = userData?.user || {};
  const [favorites, setFavorites] = useState([]);
  const [favoritesData, setFavoritesData] = useState([]);

  useEffect(() => {
    if (username) {
      dispatch(allFavorites(username))
        .then((data) => setFavorites(data.payload))
        .catch((error) => console.log(error));
    }
  }, [, dispatch, username, favoritesData, setFavoritesData]);

  useEffect(() => {
    const fetchFavoritesData = async () => {
      try {
        const requests = favorites.map((favorite) => {
          const { category, dbId } = favorite;
          return axios.get(`http://localhost:3001/${category}/${dbId}`);
        });

        const responses = await Promise.all(requests);
        const responseData = responses.map((response) => response.data);

        setFavoritesData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    if (favorites.length > 0) {
      fetchFavoritesData();
    }
  }, [favorites]);

  const handleDelete = (id) => {
    const data = {
      username: username,
      category: "movies",
      id: id.id,
    };
    dispatch(removeFavorite(data))
      .then(() => {
        const updatedFavorites = favorites.filter(
          (favorite) => favorite.id !== id.id
        );
        setFavorites(updatedFavorites);
        toast.success("Eliminado de favoritos");
      })
      .catch((error) => console.log(error));
  };

  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="flex justify-center items-center flex-col px-52 pt-10">
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      >
        <div className="dark:!border-navy-700 absolute -bottom-12 flex h-[120px] w-[120px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <img
            className="h-full w-full rounded-full"
            src="https://thesmsworks.co.uk/blog/wp-content/uploads/2022/06/cool-emoji-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-navy-700 text-xl font-bold text-black uppercase">
          {username}
        </h4>
        <h5 className="text-base font-normal text-gray-600">{email}</h5>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-navy-700 text-2xl font-bold text-black">
            Favoritos
          </h4>
          <p className="text-sm font-normal text-gray-600">
            Cantidad: <span>{favorites.length}</span>
          </p>
          <div className="grid grid-cols-5 h-[1000px]">
            {favoritesData.map((favorite) => (
              <Link
                to={`/category/movies/${favorite.id}`}
                key={favorite.id}
                className=" w-[200px] h-[250px] mt-3 mx-3"
              >
                <div className="max-w-xs">
                  <img
                    className="img-producto "
                    src={`${baseUrl}${favorite.poster_path}`}
                    alt={`${baseUrl}${favorite.original_title}`}
                  />
                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="mb-2 text-center text-sm">
                      {favorite.title}
                    </div>
                    <div className="flex justify-around mt-4">
                      <button
                        type="button"
                        className="border-red-500 border-2 rounded-full hover:bg-red-600 hover:border-red-7600"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(favorite);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-red-500 hover:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default User;
