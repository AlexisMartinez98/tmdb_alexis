const axios = require("axios");

const url = "https://api.themoviedb.org/3";
const apiKey = "dc4f983a963d247f65fde61d73e450ce";

// todas las peliculas
exports.getMovies = (req, res) => {
  const { page } = req.query;
  axios
    .get(
      `${url}/discover/movie/?api_key=${apiKey}&language=es-ES-US&sort_by=popularity.desc&page=${page}`
    )
    .then((response) => {
      res.status(200).send(response.data.results);
    })
    .catch((error) => res.status(501).send(error));
};
exports.getMoviesId = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${url}/movie/${id}?&language=es-ES&api_key=${apiKey}`, {})
    .then((movie) => res.status(200).send(movie.data))
    .catch((error) => res.status(501).send(error));
};
