import { Skeleton } from "@/components/ui/skeleton";
import { MovieCard } from "./movie-card";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useUpcomingMoviesQuery } from "../api";

export const UpcomingMoviesList = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  useEffect(() => {
    if (isError) {
      toast.error(
        `Wystąpił błąd podczas pobierania filmów wkrótce: ${error}, spróbuj ponownie`
      );
    }
  }, [isError, error]);

  return (
    <section>
      <h1 className="text-2xl font-bold">Wkrótce</h1>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="flex gap-x-1 md:gap-x-3 items-center overflow-x-auto overflow-y-hidden py-2 snap-x">
          {data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="flex gap-x-1 md:gap-x-3 items-center overflow-hidden py-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="h-52 w-36 shrink-0" />
      ))}
    </div>
  );
};
