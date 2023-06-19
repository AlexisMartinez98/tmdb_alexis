import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/api/tv")
      .then((res) => {
        setTv(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="categoria/:type"
          element={<ItemListContainer movies={movies} tv={tv} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
