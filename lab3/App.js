import React, {useState} from "react";
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from "react-native";
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, HttpLink} from "@apollo/client";

import Repos from "./components/Repos";
import Options from "./components/Options";

const TOKEN = "907f35b133a822156edd418e439347dec736b71e";

const client = new ApolloClient({
   uri: "https://api.github.com/graphql",
   // uri: httpLink,
   cache: new InMemoryCache(),
   headers: {
      authorization: `bearer ${TOKEN}`,
   },
   // defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});

const App = () => {
   const [language, setLanguage] = useState("All");
   return (
      <ApolloProvider client={client}>
         <StatusBar barStyle="dark-content" />
         <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
               <View style={styles.wrapper}>
                  <View style={styles.header}>
                     <Options language={language} setLanguage={setLanguage} />
                  </View>
                  <Repos language={language} />
               </View>
            </ScrollView>
         </SafeAreaView>
      </ApolloProvider>
   );
};

const styles = StyleSheet.create({
   scrollView: {
      backgroundColor: "#001313",
   },
   wrapper: {
      width: "100%",
      // height: 736,
      // marginTop: 20,
      alignItems: "center",
      color: "white",
   },
   header: {
      width: "100%",
      height: 100,
      borderRadius: 5,
      // borderWidth: 1,
      // borderColor: "red",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#003d3d",
      color: "white",
      paddingTop: 20,
      paddingBottom: 20,
      marginBottom: 20,
   },
});

export default App;
