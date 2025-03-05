import { Api } from "@/api";
import { PaginatedReponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "../../types";

const UPCOMING_MOVIES_QUERY_KEY = "UPCOMING_MOVIES_QUERY_KEY";

const getUpcomingMovies = async () => {
  const response = await Api.get<PaginatedReponse<Movie>>(`/movie/upcoming`);

  return response.data;
};

const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: [UPCOMING_MOVIES_QUERY_KEY],
    queryFn: getUpcomingMovies,
  });
};

export { useUpcomingMoviesQuery, UPCOMING_MOVIES_QUERY_KEY };
