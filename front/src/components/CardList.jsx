import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import Card from "./Card";

const CardList = ({ props }) => {
  // console.log("props", props);
  // console.log("alexis", props[1]?.original_title);
  if (props[1]?.original_title === undefined) {
    return props.map(
      ({
        id,
        poster_path,
        original_name,
        name,
        vote_average,
        first_air_date,
      }) => (
        <Card
          key={id}
          id={id}
          poster_path={poster_path}
          original_title={original_name}
          title={name}
          vote_average={vote_average}
          release_date={first_air_date}
        />
      )
    );
  } else {
    return props.map(
      ({
        id,
        poster_path,
        original_title,
        title,
        vote_average,
        release_date,
      }) => (
        <Card
          key={id}
          id={id}
          poster_path={poster_path}
          original_title={original_title}
          title={title}
          vote_average={vote_average}
          release_date={release_date}
        />
      )
    );
  }
};

export default CardList;
