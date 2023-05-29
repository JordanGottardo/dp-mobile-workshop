import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '~/screens/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const Stack = createNativeStackNavigator();

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
