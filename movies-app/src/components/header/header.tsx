import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchBox from "../search/searchBox";
import SearchMovies from "../search/search";

const Header = () => {
  const [searchValues, setSearchValues] = useState("");
  return (
    <div className="header">
      <div className="headerLeft">
        {/* <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link> */}
        <Link to="/movies/in_theaters" style={{ textDecoration: "none" }}>
          <span>Movies In Theatres</span>
        </Link>
        <Link to="/movies/comming_soon" style={{ textDecoration: "none" }}>
          <span>Comming Soon</span>
        </Link>
        {/* <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Top Rated Indian</span>
        </Link> */}
        <Link to="/movies/top_indian" style={{ textDecoration: "none" }}>
          <span>Top Rated Indian</span>
        </Link>
        <Link to="/movies/top_rated_all" style={{ textDecoration: "none" }}>
          <span>Top Rated Movies</span>
        </Link>
        <Link to="/movies/favourites" style={{ textDecoration: "none" }}>
          <span>Favourites</span>
        </Link>
        <SearchBox />
        {/* <SearchMovies /> */}
      </div>
      {/* <div className="searchQuery">
        <input type="text" placeholder="Search for a movie.." />

        <SearchBox />
      </div> */}
      {/* <div>
        <SearchMovies />
      </div> */}
    </div>
  );
};

export default Header;
