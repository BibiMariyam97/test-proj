import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const SearchBox = (props: any) => {
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="search movie..."
//         value={props.value}
//         onChange={(event) => props.setSearchValues(event.target.value)}
//       />
//     </div>
//   );
// };

const SearchBox = () => {
  const [query, setQuery] = useState<any>("");
  const navigate = useNavigate();

  const searchQueryHandler = (event: any) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`movies/search/${query}`);
    }
  };
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Search for a movie or tv show...."
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
      />
    </div>
  );
};

export default SearchBox;
