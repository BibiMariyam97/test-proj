import axios from "axios";

const API_KEY = "4e44d9029b1270a757cddc766a1bcb63";

export const fetchMoviesByLanguage = async (language: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${language}`
  );
  return response.data.results;
};
/////////gtp
// export const fetchMoviesByLanguage = async (language: string) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${language}`
//     );
//     return response.data.results;
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     return [];
//   }
// };
