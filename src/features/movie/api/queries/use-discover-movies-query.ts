import { Api } from "@/api";
import { PaginatedReponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "../../types";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

const DISCOVER_MOVIES_QUERY_KEY = "DISCOVER_MOVIES_QUERY_KEY";

export type DiscoverMoviesSortOption =
  | "popularity.desc"
  | "popularity.asc"
  | "vote_average.desc"
  | "vote_average.asc";

export interface DiscoverMoviesQueryOptions {
  sortBy: DiscoverMoviesSortOption;
  date?: DateRange;
}

const getDiscoverMovies = async ({
  sortBy,
  date,
}: DiscoverMoviesQueryOptions) => {
  const response = await Api.get<PaginatedReponse<Movie>>(`/discover/movie`, {
    params: {
      page: 1,
      sort_by: sortBy,
      "release_date.gte": date?.from && format(date.from, "yyyy-MM-dd"),
      "release_date.lte": date?.to && format(date.to, "yyyy-MM-dd"),
    },
  });

  return response.data;
};

const useDiscoverMoviesQuery = (options: DiscoverMoviesQueryOptions) => {
  return useQuery({
    queryKey: [DISCOVER_MOVIES_QUERY_KEY],
    queryFn: () => getDiscoverMovies(options),
  });
};

export { useDiscoverMoviesQuery, DISCOVER_MOVIES_QUERY_KEY };
