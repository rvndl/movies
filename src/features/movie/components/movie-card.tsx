import Image from "next/image";
import { Movie } from "../types";
import { StarIcon } from "lucide-react";
import { getImageUrl } from "../utils";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  movie: Movie;
  isFullWidth?: boolean;
}

export const MovieCard = ({ movie, isFullWidth }: Props) => {
  return (
    <div
      className={clsx(
        "w-auto relative group rounded-xl transition cursor-pointer shrink-0 snap-start overflow-hidden",
        isFullWidth ? "h-full" : "min-h-40 h-40 md:h-64 md:min-h-64"
      )}
    >
      <Link href={`/movie/${movie.id}`} className="h-full">
        <Image
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full relative rounded-xl bg-cover select-none group-hover:scale-110 transition"
          width={64}
          height={96}
        />
        <p className="absolute font-semibold text-xs text-white px-2.5 py-0.5 left-1 right-1 bottom-1 w-max rounded-xl border backdrop-blur-xl bg-black/20 border-slate-100/30 truncate max-w-full">
          {movie.title}
        </p>
        {Boolean(movie.vote_average) && (
          <div className="text-white pl-1 pr-2 py-0.5 absolute top-1 left-1 flex items-center gap-1 justify-center text-xs bg-black/20 border-slate-100/30 backdrop-blur-xl rounded-xl">
            <StarIcon className="w-4 h-4" />
            <p>{movie.vote_average.toFixed(1)}/10</p>
          </div>
        )}
      </Link>
    </div>
  );
};
