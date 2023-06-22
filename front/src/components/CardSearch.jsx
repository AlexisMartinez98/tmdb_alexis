import React from "react";
import { Link } from "react-router-dom";

const CardSearch = ({
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
  id,
}) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <Link to={`/category/movies/${id}`}>
      <div className="max-w-xs rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <img
          className="img-producto w-full"
          src={`${baseUrl}${poster_path}`}
          alt={`${baseUrl}${original_title}`}
        />
        <div className="px-6 py-4 border-t border-gray-200">
          <div className=" mb-2 text-center">{title}</div>
          <div className="flex justify-around mt-4">
            <p className="text-gray-700 text-base font-bold text-center">
              <span className="text-[#00a650] font-light text-sm">
                Fecha de estreno:
              </span>
              {`${release_date}`}
            </p>
            <p className="font-light">{vote_average}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardSearch;
