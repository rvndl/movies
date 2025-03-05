import toast from "react-hot-toast";
import { useMovieCreditsQuery } from "../../api";
import { useEffect } from "react";
import Image from "next/image";
import { getImageUrl } from "../../utils";

interface Props {
  movieId?: number;
}

export const MovieDetailsCrew = ({ movieId }: Props) => {
  const { isFetching, data, isError, error } = useMovieCreditsQuery(movieId!, {
    enabled: Boolean(movieId),
  });

  useEffect(() => {
    if (isError) {
      toast.error(
        `Wystąpił błąd podczas pobierania aktorów filmu: ${error}, spróbuj ponownie`
      );
    }
  }, [isError, error]);

  return (
    <section>
      <h2 className="font-bold text-2xl">Obsada</h2>
      <div className="mt-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2">
        {isFetching ? (
          <LoadingSkeleton />
        ) : (
          data?.cast.map((cast) => (
            <div
              key={cast.id}
              className="rounded-xl bg-white shadow-2xs border border-accent hover:-translate-y-1 transition"
            >
              <Image
                src={getImageUrl(cast.profile_path)}
                alt={cast.name}
                className="aspect-square w-full object-cover rounded-t-xl"
                width={200}
                height={128}
              />
              <section className="p-2">
                <p className="font-medium">{cast.character}</p>
                <p className="text-muted-foreground text-sm">{cast.name}</p>
              </section>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

const LoadingSkeleton = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="h-44 w-full rounded-xl bg-gray-200" />
      ))}
    </>
  );
};
