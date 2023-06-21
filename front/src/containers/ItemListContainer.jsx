import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import CardList from "../components/CardList";

const ItemListContainer = (props) => {
  const URL = useLocation().pathname.split("/")[2];
  const { type } = useParams();

  return (
    <div>
      <div className="grid gap-4 grid-cols-5 px-10 py-5">
        <CardList props={props[URL]} />
      </div>
      <div className="flex justify-center m-5">
        {/* <Link
          to={`${1}`}
          className="bg-[#0d253f] hover:bg-[#01b4e4] text-white font-bold py-2 px-4 rounded mr-2"
        >
          {"<<"} Anterior
        </Link> */}
        <Link
          to={`${1}`}
          className="bg-[#0d253f] hover:bg-[#01b4e4] text-white font-bold py-2 px-4 rounded"
        >
          Siguiente {">>"}
        </Link>
      </div>
    </div>
  );
};

export default ItemListContainer;
