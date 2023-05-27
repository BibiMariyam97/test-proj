import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
import MovieListIndian from "./components/movieList/movieListIndian";
import MoviesInTheatreList from "./components/movieList/moviesInTheatreList";
import MoviesCommingSoon from "./components/movieList/moviesCommingSoon";
import MoviesTopRatedIndian from "./components/movieList/moviesTopRatedIndian";
import MoviesTopRated from "./components/movieList/moviesTopRated";
import SearchBox from "./components/search/searchBox";
import SearchMovies from "./components/search/search";
import SearchResult from "./components/search/searchResult";
import AddFavourite from "./components/favourites/AddFavourites";

function App() {
  // const [searchValues, setSearchValues] = useState("");
  return (
    <div className="App">
      <Router>
        {/* Header Component --diaplays all navlinks (movies, favourites and search) */}
        <Header />
        {/* <SearchBox />
        <SearchMovies /> */}

        {/* navigation paths to differnt pages */}
        <Routes>
          {/* home page */}
          <Route index element={<Home />}></Route>
          {/* movie details page */}
          <Route path="movie/:id" element={<Movie />}></Route>

          {/* list of movies as selected in header */}
          {/* <Route path="movies/:type" element={<MovieList />}></Route> */}
          {/* <Route path="movies/:type" element
          {/* favourite movies list page */}

          {/* in theateres */}
          <Route
            path="movies/in_theaters"
            element={<MoviesInTheatreList favoutiteComponent={AddFavourite} />}
          ></Route>

          {/* commin soon */}
          <Route
            path="movies/comming_soon"
            element={<MoviesCommingSoon />}
          ></Route>

          {/* top rated indian */}
          <Route
            path="movies/top_indian"
            element={<MoviesTopRatedIndian />}
          ></Route>

          {/* top rated movies */}
          <Route
            path="movies/top_rated_all"
            element={<MoviesTopRated />}
          ></Route>

          {/* favourites */}
          <Route
            path="movies/favourites"
            element={<h1>Favourite movies page...</h1>}
          ></Route>

          {/* <Route path="movies/search" element={<SearchMovies />}></Route> */}
          <Route path="movies/search/:query" element={<SearchResult />}></Route>

          {/* error page incase of wrong path */}
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
