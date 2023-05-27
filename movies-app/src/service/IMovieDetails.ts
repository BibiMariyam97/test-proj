export interface MovieDetail {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  release_date: string;
  genres: string[];
  overview: string;
  homepage?: string;
  imdb_id?: string;
  production_companies: string[];
}
