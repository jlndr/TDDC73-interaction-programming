import React from "react";
import {useQuery, gql} from "@apollo/client";
import {StyleSheet, View, Text, FlatList, Pressable} from "react-native";

const Repos = (props) => {
   const GITHUB_QUERY = gql`
      query($first: Int, $query: String!) {
         search(query: $query, type: REPOSITORY, first: $first) {
            repositoryCount
            edges {
               textMatches {
                  property
               }
               node {
                  ... on Repository {
                     name
                     owner {
                        login
                     }
                     primaryLanguage {
                        name
                     }
                     description
                     stargazerCount
                     forkCount
                     object(expression: "master") {
                        ... on Commit {
                           history {
                              totalCount
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   `;

   let stars = "0";
   const {data, loading, error} = useQuery(GITHUB_QUERY, {
      variables: {first: 10, query: props.language != "All" ? `language:${props.language}` : "stars:<=100"},
   });

   if (data) {
      console.log("data", data.search.edges[0]);
      console.log("errrr", error);
      // console.log("loading", loading);
      // let test = data.chapter.title;
   }
   return (
      <>
         {data &&
            data.search.edges.map((item, index) => (
               <View key={index} style={repoStyles.repo}>
                  <Text style={repoStyles.repoName}>{item.node.name}</Text>
                  <Text style={repoStyles.owner}>
                     {item.node.owner.login}/{item.node.name}
                  </Text>
                  <Text style={repoStyles.description}>{item.node.description}</Text>
                  <View style={{width: "100%", height: 30, marginTop: 10}}>
                     <View style={repoStyles.cornerBox}>
                        <Text style={repoStyles.forks}>Forks: {item.node.forkCount}</Text>
                        <Text style={repoStyles.stars}>Stars: {item.node.stargazerCount}</Text>
                     </View>
                  </View>
               </View>
            ))}
      </>
   );
};

export default Repos;

const repoStyles = StyleSheet.create({
   repo: {
      marginTop: 10,
      width: "90%",
      backgroundColor: "#006666",
      padding: 10,
      borderRadius: 5,
   },
   repoName: {
      color: "white",
      fontSize: 18,
      fontWeight: "700",
   },
   owner: {
      color: "rgb(210, 210, 210)",
      fontSize: 12,
   },
   description: {
      marginTop: 10,
      color: "white",
      fontSize: 13,
      // marginBottom: 15,
      display: "flex",
      flexWrap: "wrap",
   },
   cornerBox: {
      width: 150,
      height: "100%",
      flex: 1,
      flexDirection: "row",
      // marginBottom: 5,
      // marginRight: 5,
      alignSelf: "flex-end",
      // backgroundColor: "red",
   },
   forks: {
      width: "50%",
      height: "100%",
      backgroundColor: "#001313",
      color: "white",
      fontSize: 10,
      textAlign: "center",
      textAlignVertical: "center",
   },
   stars: {
      width: "50%",
      backgroundColor: "#eb7e02",
      color: "white",
      fontSize: 10,
      textAlign: "center",
      textAlignVertical: "center",
   },
});
