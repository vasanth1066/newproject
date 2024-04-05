import React from "react";

import Movie from "./Movie";
import classes from "./MovieList.module.css";

const MovieList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          releaseDate={movie.releaseDate}
          title={movie.title}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
