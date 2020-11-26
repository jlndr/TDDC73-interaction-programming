import React, {useState} from "react";
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from "react-native";
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, HttpLink} from "@apollo/client";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import RepoDetail from "./components/RepoDetail";

const TOKEN = "907f35b133a822156edd418e439347dec736b71e";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `bearer ${TOKEN}`,
  },
});

const Stack = createStackNavigator();
const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <HomeScreen /> */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false, cardStyle: {backgroundColor: "#001313"}, cardStyleInterpolator: forFade}}
          />
          <Stack.Screen
            name="RepoDetail"
            component={RepoDetail}
            options={{headerShown: false, cardStyle: {backgroundColor: "#001313"}, cardStyleInterpolator: forFade}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
