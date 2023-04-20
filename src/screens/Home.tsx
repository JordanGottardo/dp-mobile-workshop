import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Home = () => (
  <StyledContainer>
    <Text>TEST22 Open up Home.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
  </StyledContainer>
);

const StyledContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
