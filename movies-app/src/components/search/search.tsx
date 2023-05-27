import React, { useState, useEffect } from "react";
import SearchBox from "./searchBox";
import axios from "axios";
import Cards from "../card/card";
import "../movieList/movieList.css";
import "../card/card.css";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  backdrop_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const SearchMovies = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${searchValue}`
      );

      setMovieList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleSearch();
    navigate(`movies/search/${searchValue}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      {/* Display the movies */}
      <div className="movie__list">
        <h2 className="list__title">Search</h2>
        <div className="list__cards">
          {movieList.map((movie) => (
            <Cards movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMovies;

{
  /* <Route path="/search/:query" element={<SearchResult />} /> */
}

//   const getMovieRequest = async (searchValue: string) => {
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${searchValue}`;

//     const response = await fetch(url);
//     const responseJson = await response.json();

//     if (responseJson.Search) {
//       setMovies(responseJson.Search);
//     }
//   };

//   useEffect(() => {
//     getMovieRequest(searchValue);
//   }, [searchValue]);

//   <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />;
// };

// const SearchMovies = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [searchValue, setSearchValue] = useState<string>("");

//   interface Movie {
//     Title: string;
//     Year: string;
//     imdbID: string;
//     Type: string;
//     Poster: string;
//   }
