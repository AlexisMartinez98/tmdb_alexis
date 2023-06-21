import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ItemDetailMovie from "./ItemDetailMovie";
import ItemDetailTv from "./ItemDetailTv";
import GridLoader from "react-spinners/GridLoader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { itemId } = useParams();
  const URL = useLocation().pathname.split("/")[2];
  useEffect(() => {
    const movieId = fetch(`http://localhost:3001/${URL}/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [itemId]);
  return (
    <div
      className="bg-cover bg-center"
      // style={{
      //   backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      // }}
    >
      {/* {item.id ? (<ItemDetailMovie data={item} />) : (
        <div className="flex items-center justify-center h-screen">
          <GridLoader color="#36d7b7" />
        </div>
      )} */}
      {item.id ? (
        URL === "movies" ? (
          <ItemDetailMovie data={item} />
        ) : (
          <ItemDetailTv data={item} />
        )
      ) : (
        <div className="flex items-center justify-center h-screen">
          <GridLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
