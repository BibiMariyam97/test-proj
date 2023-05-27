import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzdmYmVkOTJhMGZkYWI0Y2VkNDViNmE4NmM5ZDcyYiIsInN1YiI6IjY0NmVlOTc5ZWEzOTQ5MDBkZDBkMTk4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MWtVA3KdLq5vhXsbn5vSMSd3gAQOdJ0nddanSxJTQbA";

const headers: AxiosRequestConfig["headers"] = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (
  url: string,
  params?: AxiosRequestConfig["params"]
) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
