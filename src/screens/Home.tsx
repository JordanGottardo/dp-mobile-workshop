import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_JOKE } from '~/apollo/queries/joke';

export const Home = () => {
  const { data, refetch } = useQuery(GET_RANDOM_JOKE);

  const newJoke = data?.person?.value ?? '';

  return (
    <StyledContainer>
      <Text>Chuck Norris Joke:</Text>
      <Text>{newJoke}</Text>
      <StatusBar style="auto" />

      <Button title="New joke, please" onPress={() => refetch()} />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
