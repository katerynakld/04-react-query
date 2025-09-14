import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieResult {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const MY_TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get<MovieResult>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query: `${query}`,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${MY_TMDB_TOKEN}`,
      },
    }
  );

  return response.data.results;
}
