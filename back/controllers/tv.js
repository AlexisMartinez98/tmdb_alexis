const axios = require("axios");

const url = "https://api.themoviedb.org/3";
const apiKey = "dc4f983a963d247f65fde61d73e450ce";

// todas las tv
exports.getTv = (req, res) => {
  axios
    .get(
      `${url}/discover/tv/?api_key=${apiKey}&language=es-ES-US&sort_by=popularity.desc&page=1`
    )
    .then((response) => res.status(200).send(response.data.results))
    .catch((error) => res.status(501).send(error));
};
exports.getTvId = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${url}/tv/${id}?api_key=${apiKey}&language=es-ES`, {})
    .then((movie) => res.status(200).send(movie.data))
    .catch((error) => res.status(501).send(error));
};
