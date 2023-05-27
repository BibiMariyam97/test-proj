import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";
import AddFavourite from "../favourites/AddFavourites";

interface Movie {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

interface CardsProps {
  movie: Movie;
}

const Cards: React.FC<CardsProps> = ({ movie }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const FavouriteComponent = props.favouriteComponent;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />
            <div className="cards__overlay">
              {/* add fave goes here */}
              {/* <FavouriteComponent /> */}
            </div>
          </div>
          {/* <div>
            <button>Add to favourites</button>
          </div> */}
        </Link>
      )}
    </>
  );
};

export default Cards;
