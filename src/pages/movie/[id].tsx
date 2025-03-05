import { Spinner } from "@/components/ui/spinner";
import dynamic from "next/dynamic";

const MovieDetailsPage = dynamic(
  () =>
    import("@/features/movie/pages/movie-details-page").then(
      (mod) => mod.MovieDetailsPage
    ),
  {
    loading: () => <Spinner />,
  }
);

export default function MoviePage() {
  return <MovieDetailsPage />;
}
