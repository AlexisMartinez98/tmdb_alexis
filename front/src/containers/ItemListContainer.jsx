import React from "react";
import { axiosMoviesAll } from "../services/axiosMovies";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import axios from "axios";

const ItemListContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosMoviesAll().then((res) => {
      setMovies(res.data.results);
    });
    console.log(movies);
  }, []);

  return (
    <div>
      <CardList movies={movies} />
    </div>
  );
};

export default ItemListContainer;
