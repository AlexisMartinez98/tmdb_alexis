import React from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CardList from "../components/CardList";

const ItemListContainer = (props) => {
  const { page, setPage } = props;
  const URL = useLocation().pathname.split("/")[2];
  const { type } = useParams();

  const handlePage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };
  const handlePageBack = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };

  return (
    <div>
      <div className="grid gap-4 grid-cols-5 px-10 py-5">
        <CardList props={props[URL]} />
      </div>
      <div className="flex justify-center m-5 items-center">
        <button
          className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
            page === 1 ? "cursor-not-allowed" : ""
          }`}
          disabled={page === 1 ? true : false}
          onClick={handlePageBack}
        >
          Anterior Pagina
        </button>
        <span className="mx-5">{page}</span>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePage}
        >
          Siguente Pagina
        </button>
      </div>
    </div>
  );
};

export default ItemListContainer;
