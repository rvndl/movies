export interface PaginatedReponse<TResults> {
  page: number;
  results: TResults[];
}
