import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Home = () => {
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
