import { useQuery } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { GET_MOVIES } from '~/apollo/queries/getMovies';

export const Home = () => {
  const [text, setText] = useState('');

  const handleText = debounce(setText, 2000);

  const { data, loading, error } = useQuery(GET_MOVIES, {
    skip: !text,
    variables: { input: text },
  });

  console.log(data);

  // const [isValid, setValid] = useState(false);

  // Whenever the text variable changes, the function is evaluated again
  // useEffect(() => {
  //   if (text.length > 5) {
  //     setValid(true);
  //   }
  // }, [text]);

  return (
    <StyledContainer>
      <Text>The Movie Searcher</Text>
      <TextInput onChangeText={handleText} placeholder="type some text here" />
      {/* {isValid ? <Text>{text}</Text> : <Text>Input must be longer</Text>} */}
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
