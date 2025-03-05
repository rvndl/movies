import { DiscoverMoviesSortOption } from "../api";

const IMAGE_CDN = "https://image.tmdb.org/t/p/original";

export const getImageUrl = (path?: string) => {
  if (!path) {
    return "https://placehold.co/600x400.webp";
  }

  return IMAGE_CDN + path;
};

const sortNames: Record<DiscoverMoviesSortOption, string> = {
  "popularity.desc": "Najpopularniejsze",
  "popularity.asc": "Najmniej popularne",
  "vote_average.desc": "Najlepiej oceniane",
  "vote_average.asc": "Najgorzej oceniane",
};

export const getSortName = (sort: DiscoverMoviesSortOption) => {
  return sortNames[sort];
};
