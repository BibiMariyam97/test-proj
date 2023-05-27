import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../movieList/movieList";
import Cards from "../card/card";
import "../card/card.css";
import "../movieList/movieList.css";
import { fetchDataFromApi } from "../../utils/api";
import axios from "axios";

interface Movie {
  id: number;
  backdrop_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}
// const [searchValue, setSearchValue] = useState("");

const SearchResult = () => {
  const [movieList, setMovieList] = useState<any[]>([]);
  // const [pageNum, setPageNum] = useState(1);
  // const [loading, setLoading] = useState(false);
  const { query } = useParams<{ query: string }>();

  // const fetchInitialData = () => {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`
  //   ).then((res: any) => {
  //     setMovieList(res);
  //   });
  // };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`
      );
      setMovieList(response.data.results);
    };
    fetchMovies();
  }, [query]);

  //////////working part
  // const fetchInitialData = () => {
  //   fetchDataFromApi(`/search/multi?query=${query}`).then((res: any) => {
  //     setMovieList(res);
  //   });
  // };

  // useEffect(() => {
  //   fetchInitialData();
  // }, [query]);

  return (
    <div>
      {/* Display the movies */}
      <div className="movie__list">
        <h2 className="list__title">Search movies....</h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <Cards movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
