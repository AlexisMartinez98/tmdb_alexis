import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";
import FormRegister from "./components/FormRegister";
import FormLogin from "./components/FormLogin";
import ItemDetailContainer from "./components/ItemDetailContainer";
import User from "./components/User";
import ItemListSearch from "./containers/ItemListSearch";

function App() {
  const [userData, setUserData] = useState(null);
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/me", { withCredentials: true })
      .then((res) => {
        // console.log("consulta si hay user", res.data);
        setUserData(res.data); // Guardar la respuesta del backend en el estado userData
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/movies", { params: { page } })
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3001/tv", { params: { page } })
      .then((res) => {
        setTv(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div>
      <NavBar
        userData={userData}
        setUserData={setUserData}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="category/:type"
          element={
            <ItemListContainer
              movies={movies}
              tv={tv}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path="user/register" element={<FormRegister />} />
        <Route path="user/login" element={<FormLogin />} />
        <Route
          path="category/:type/:itemId"
          element={<ItemDetailContainer />}
        />
        <Route
          path="user/:username"
          element={userData ? <User userData={userData} /> : <FormLogin />}
        />
        <Route path="/search" element={<ItemListSearch search={search} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
