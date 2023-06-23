import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetMovies($input: String!) {
    moviesList(input: $input)
      @rest(type: "MoviesList", path: "search/movie?query={args.input}") {
      results {
        id
        original_title
        poster_path
      }
    }
  }
`;
