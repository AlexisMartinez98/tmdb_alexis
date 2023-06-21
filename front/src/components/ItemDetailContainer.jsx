import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import Loader from "react-loader-spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();
  const URL = useLocation().pathname.split("/")[2];
  useEffect(() => {
    const movieId = fetch(`http://localhost:3001/movies/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [itemId]);
  return <>{item.id ? <ItemDetail data={item} /> : spiner()}</>;
};

export default ItemDetailContainer;
