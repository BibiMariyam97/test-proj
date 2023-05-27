import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
import AddFavourite from "../favourites/AddFavourites";

interface MoviesInTheatreList {
  id: number;
  backdrop_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const MoviesInTheatreList = (props: any) => {
  const [movieList, setMovieList] = useState([]);
  // const { type } = useParams();
  const FavouriteComponent = props.favouriteComponent;

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   getData();
  // }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">Movies in Theatres</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <div>
            <Cards movie={movie} />
            {/* <FavouriteComponent /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesInTheatreList;
