import React from "react";
// import { axiosMoviesAll } from "../services/axiosMovies";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import axios from "axios";

const ItemListContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CardList movies={movies} />
    </div>
  );
};

export default ItemListContainer;
