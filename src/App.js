import React, { useCallback, useEffect, useState } from "react";

import MovieList from "./components/MovieList";
import NewMovieInput from "./components/NewMovieInput/NewMovieInput";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [Isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  function cancelloading() {
    setIsloading(false);
  }

  const fetchMoviesHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://crudcrud.com/api/26aecbddda864fdfaa68afe82b0a629d/add"
      );
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }

      const data = await response.json();

      const transformedMovies = data.map((movieData) => {
        return {
          id: movieData._id,
          title: movieData.title,
          openingText: movieData.openingtext,
          releaseDate: movieData.releasedate,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>No movie found</p>;
  if (!Isloading) {
    content = <MovieList movies={movies} />;
  }
  if (Isloading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://crudcrud.com/api/26aecbddda864fdfaa68afe82b0a629d/add",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <NewMovieInput onAddMovie={addMovieHandler}></NewMovieInput>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>

        <button onClick={cancelloading}>Cancel</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
