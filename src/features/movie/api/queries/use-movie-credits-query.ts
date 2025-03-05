import { Api } from "@/api";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Cast } from "../../types";

const MOVIE_CREDITS_QUERY_KEY = "MOVIE_CREDITS_QUERY_KEY";

const getMovieCredits = async (id: number) => {
  const response = await Api.get<{ cast: Cast[] }>(`/movie/${id}/credits`);

  return response.data;
};

const useMovieCreditsQuery = (
  id: number,
  options?: Partial<UseQueryOptions<{ cast: Cast[] }, Error>>
) => {
  return useQuery({
    queryKey: [MOVIE_CREDITS_QUERY_KEY, id],
    queryFn: () => getMovieCredits(id),
    ...options,
  });
};

export { useMovieCreditsQuery, MOVIE_CREDITS_QUERY_KEY };
