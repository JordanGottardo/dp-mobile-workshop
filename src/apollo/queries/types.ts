export type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
};

export type MovieList = {
  results: Movie[];
};
