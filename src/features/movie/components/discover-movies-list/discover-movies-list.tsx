import { useEffect, useState } from "react";
import { DiscoverMoviesQueryOptions, useDiscoverMoviesQuery } from "../../api";
import { MovieCard } from "../movie-card";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import { DiscoverMoviesListFilters } from "./discover-movies-list-filters";

export const DiscoverMoviesList = () => {
  const [filters, setFilters] = useState<DiscoverMoviesQueryOptions>({
    sortBy: "popularity.desc",
  });

  const { data, isLoading, isFetching, isError, error, refetch } =
    useDiscoverMoviesQuery(filters);

  const moviesNum = data?.results?.length ?? 0;

  useEffect(() => {
    refetch();
  }, [refetch, filters]);

  useEffect(() => {
    if (isError) {
      toast.error(
        `Wystąpił błąd podczas pobierania filmów wkrótce: ${error}, spróbuj ponownie`
      );
    }
  }, [isError, error]);

  return (
    <section>
      <div className="flex items-end w-full">
        <h1 className="text-2xl font-bold">
          Odkryj{" "}
          <small className="text-muted-foreground font-normal text-sm">
            ({moviesNum})
          </small>
        </h1>
        <span className="inline-flex items-end gap-2 ml-auto">
          {isFetching && <Spinner />}
          <DiscoverMoviesListFilters value={filters} onChange={setFilters} />
        </span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-1 md:gap-3 items-center flex-wrap mt-2">
        {isLoading ? (
          <LoadingSkeleton />
        ) : data?.results.length === 0 ? (
          <p className="text-muted-foreground text-center text-sm">
            Brak filmów spełniających kryteria wyszukiwania
          </p>
        ) : (
          data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isFullWidth />
          ))
        )}
      </div>
    </section>
  );
};

const LoadingSkeleton = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton key={index} className="h-full w-32 shrink-0 rounded-xl" />
      ))}
    </>
  );
};
