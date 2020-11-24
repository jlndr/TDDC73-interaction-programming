import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import {HttpLink, ApolloLink} from 'apollo-boost';

const TOKEN = '907f35b133a822156edd418e439347dec736b71e';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

const client = new ApolloClient({
  // uri: "https://api.graphql.guide/graphql",
  uri: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

import TestData from './components/TestData';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}></ScrollView>
        <Text>Hello</Text>
        <TestData />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ededed',
  },
});

export default App;
