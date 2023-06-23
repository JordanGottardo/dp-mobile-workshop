import * as React from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestLink } from 'apollo-link-rest';
import { Home } from '~/screens/Home';

const Stack = createNativeStackNavigator();

//https://developer.themoviedb.org/reference/intro/getting-started
const restLink = new RestLink({
  uri: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjhiY2Q4MWJjMTc1ZTYwNDViMzNiOWZmNmUwZDUzOCIsInN1YiI6IjY0NzRiNjZlY2MyNzdjMDBmOWY1MjA2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H8NBFrcl8hL1t1mH-mRx8bfYdwevLedTJBibxXPj_rw',
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
