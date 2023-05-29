import { gql } from '@apollo/client';

export const GET_RANDOM_JOKE = gql`
  query Random {
    person @rest(type: "RandomJoke", path: "/random") {
      value
    }
  }
`;
