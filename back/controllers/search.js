const axios = require("axios");

const apiKey = "dc4f983a963d247f65fde61d73e450ce";
const url = `https://api.themoviedb.org/3`;

exports.getSearch = (req, res) => {
  const { query } = req.query;
  axios
    .get(`${url}/search/movie?api_key=${apiKey}&language=es-ES&query=${query}`)
    .then((response) => {
      res.status(200).send(response.data.results);
    });
};
