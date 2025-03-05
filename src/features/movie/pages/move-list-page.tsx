import { Page } from "@/components/page";
import { DiscoverMoviesList, UpcomingMoviesList } from "../components";

export const MovieListPage = () => {
  return (
    <Page>
      <div className="flex flex-col gap-8">
        <UpcomingMoviesList />
        <DiscoverMoviesList />
      </div>
    </Page>
  );
};
