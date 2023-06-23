import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/actions";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";
import FormRegister from "./components/FormRegister";
import FormLogin from "./components/FormLogin";
import ItemDetailContainer from "./components/ItemDetailContainer";
import User from "./components/User";
import ItemListSearch from "./containers/ItemListSearch";

function App() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/me", { withCredentials: true })
      .then((res) => {
        dispatch(setUser(res.data));
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

  useEffect(() => {
    Navigate("/category/movies");
  }, []);

  return (
    <div>
      <NavBar search={search} setSearch={setSearch} />
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
        <Route path="user/:username" element={<User />} />
        <Route path="/search" element={<ItemListSearch search={search} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
