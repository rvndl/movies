import { Api } from "@/api";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Movie } from "../../types";

const MOVIE_DETAILS_QUERY_KEY = "MOVIE_DETAILS_QUERY_KEY";

const getMovieDetails = async (id: string) => {
  const response = await Api.get<Movie>(`/movie/${id}`);

  return response.data;
};

const useMoveDetailsQuery = (
  id: string,
  options?: Partial<UseQueryOptions<Movie, Error>>
) => {
  return useQuery({
    queryKey: [MOVIE_DETAILS_QUERY_KEY, id],
    queryFn: () => getMovieDetails(id),
    ...options,
  });
};

export { useMoveDetailsQuery, MOVIE_DETAILS_QUERY_KEY };
