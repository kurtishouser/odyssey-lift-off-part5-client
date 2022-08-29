import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const clientOptions =
  process.env.NODE_ENV === 'production'
    ? {
        uri: 'https://apollo-gql-catstronauts.herokuapp.com/', // change to YOUR own production server
        cache: new InMemoryCache(),
        name: 'web',
        version: '1.0',
      }
    : {
        uri: 'http://localhost:4000',
        cache: new InMemoryCache(),
      };

const client = new ApolloClient(clientOptions);

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
