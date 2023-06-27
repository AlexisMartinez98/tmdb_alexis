import React from "react";
import CardSearch from "../components/CardSearch";
const ItemListSearch = ({ search }) => {
  return (
    <div className="grid gap-4 grid-cols-5 px-10 py-5">
      {search.map(
        ({
          id,
          poster_path,
          original_title,
          title,
          vote_average,
          release_date,
        }) => (
          <CardSearch
            key={id}
            id={id}
            poster_path={poster_path}
            original_title={original_title}
            title={title}
            vote_average={vote_average}
            release_date={release_date}
          />
        )
      )}
    </div>
  );
};

export default ItemListSearch;
