import { useQuery } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { GET_MOVIES } from '~/apollo/queries/getMovies';

export const Home = () => {
  const [text, setText] = useState('');

  const handleText = debounce(setText, 1000);

  const { data, loading, error } = useQuery(GET_MOVIES, {
    skip: !text,
    variables: { input: text },
  });

  console.log('data', data, 'loading', loading, 'error', error);

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

      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : data && data.moviesList ? (
        <div>
          <FlatList
            data={data.moviesList.results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MovieContainer>
                <Image
                  style={{ width: 50, height: 75 }}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                />
                <Text>{item.original_title}</Text>
              </MovieContainer>
            )}
          />
        </div>
      ) : (
        <Text>No movies found.</Text>
      )}

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
  justify-content: flex-start;
`;

const MovieContainer = styled.View`
  margin: 10px;
  align-items: center
`;
