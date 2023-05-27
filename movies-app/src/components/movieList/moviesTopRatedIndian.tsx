import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

interface Movie {
  id: number;
  backdrop_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const MoviesTopRatedIndian = () => {
  const [movieList, setMovieList] = useState([]);
  // const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   getData();
  // }, [type]);

  const getData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&with_origin_country=IN"
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">Top Rated Indian Movies</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesTopRatedIndian;
