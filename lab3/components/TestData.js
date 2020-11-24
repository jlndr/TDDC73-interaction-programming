import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

const TestData = () => {
  const TEST_QUERY = gql`
    query {
      viewer {
        login
      }
    }
  `;
  const {data, loading, error} = useQuery(TEST_QUERY);

  if (data || error || loading) {
    console.log('hej');
    console.log('errrr', error);
    console.log('loading', loading);
    // let test = data.chapter.title;
  }

  return (
    <>
      {data && (
        <FlatList
          data={data.chapters}
          renderItem={({item}) => (
            <Pressable>
              <Text>{item.title}</Text>
            </Pressable>
          )}
        />
      )}
      {/* {data && data.chapters.map} */}
    </>
  );
};

export default TestData;
