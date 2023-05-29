import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '~/apollo/queries/getMovies';

export const Home = () => {
  const { data } = useQuery(GET_MOVIES, {
    variables: { input: 'star wars' },
  });

  console.log(data);

  return (
    <StyledContainer>
      <Text>The Movie Searcher</Text>
      {/* <Text>{newJoke}</Text> */}
      <StatusBar style="auto" />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
