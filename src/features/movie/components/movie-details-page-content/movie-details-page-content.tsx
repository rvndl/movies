import { Movie } from "../../types";
import { MovieDetailsCard } from "./movie-details-card";
import { MovieDetailsCrew } from "./movie-details-crew";

interface Props {
  movie?: Movie;
  isLoading: boolean;
}

export const MovieDetailsPageContent = ({ movie, isLoading }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <MovieDetailsCard movie={movie} isLoading={isLoading} />
      <MovieDetailsCrew movieId={movie?.id} />
    </div>
  );
};
