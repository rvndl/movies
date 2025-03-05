import { Spinner } from "@/components/ui/spinner";
import dynamic from "next/dynamic";

const MovieListPage = dynamic(
  () =>
    import("@/features/movie/pages/move-list-page").then(
      (mod) => mod.MovieListPage
    ),
  {
    loading: () => <Spinner />,
  }
);

export default function Home() {
  return <MovieListPage />;
}
