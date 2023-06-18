import axios from "axios";

export const axiosMoviesAll = function () {
  return axios
    .get("http://localhost:3000/api/movies")
    .then((response) => {
      if (response && response.data) {
        console.log(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
