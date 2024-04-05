import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h3>{props.releaseDate}</h3>
      <h2>{props.title}</h2>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
