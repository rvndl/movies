import Image from "next/image";
import { Movie } from "../../types";
import { getImageUrl } from "../../utils";
import { StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  movie?: Movie;
  isLoading?: boolean;
}

export const MovieDetailsCard = ({ movie, isLoading }: Props) => {
  if (!movie || isLoading) {
    return <LoadingSkeleton />;
  }

  const backgroundImage = `url(${getImageUrl(movie.backdrop_path)})`;

  return (
    <div
      className="relative w-full h-auto md:h-96 rounded-2xl bg-cover bg-no-repeat bg-center text-white"
      style={{ backgroundImage }}
    >
      <div className="w-full h-full p-4 md:p-8 flex flex-col md:flex-row gap-4 backdrop-blur-xl rounded-2xl bg-black/30">
        <Image
          src={getImageUrl(movie.poster_path)}
          alt="xd"
          width={128}
          height={256}
          className="h-full w-auto rounded-xl"
        />
        <div className="flex flex-col justify-between">
          <section>
            <h1 className="font-bold text-white text-2xl md:text-3xl">
              {movie.title}
            </h1>
            <p className="text-accent">{movie.tagline}</p>
            {Boolean(movie.vote_average) && (
              <div className="flex items-center text-xs mt-4 gap-1">
                <StarIcon className="w-4 h-4 text-yellow-500" />
                <p>{movie.vote_average.toFixed(1)}/10</p>
              </div>
            )}
            <time className="text-xs text-accent">
              Premiera {movie.release_date}
            </time>
          </section>
          <section>
            <p className="mb-4 mt-8">{movie.overview}</p>
            <div>
              <h2 className="font-medium">Gatunek</h2>
              <div className="flex items-center gap-2 mt-1">
                {movie.genres.map((genre) => (
                  <Badge key={genre.id} variant="secondary">
                    {genre.name}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const LoadingSkeleton = () => <Skeleton className="rounded-2xl w-full h-96" />;
