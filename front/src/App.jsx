import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";
import FormRegister from "./components/FormRegister";
import FormLogin from "./components/FormLogin";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/tv")
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
          path="category/:type"
          element={<ItemListContainer movies={movies} tv={tv} />}
        />
        <Route path="user/register" element={<FormRegister />} />
        <Route path="user/login" element={<FormLogin />} />
        <Route
          path="category/:type/:itemId"
          element={<ItemDetailContainer />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
