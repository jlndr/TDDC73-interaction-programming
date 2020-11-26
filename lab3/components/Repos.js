import React, {useEffect, useState} from "react";
import {useQuery, gql, useApolloClient} from "@apollo/client";
import {StyleSheet, View, Text, FlatList, Pressable, Button, TouchableHighlight, TouchableOpacity} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Repos = (props) => {
  const client = useApolloClient();
  const navigation = props.navigation;
  const language = props.language;
  const filter = props.filter.toLowerCase();
  const limit = props.limit;
  const [theData, setTheData] = useState();
  const [loading, setLoading] = useState(true);

  let queryString = `sort:${filter}-desc ${filter}:>0 `;

  language != "All" && (queryString += `language:${language}`);

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
              createdAt
              description
              stargazerCount
              forkCount
              pullRequests {
                totalCount
              }
              issues {
                totalCount
              }
              licenseInfo {
                name
              }
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

  const GET_REPOS = async () => {
    const {data} = await client.query({
      query: GITHUB_QUERY,
      variables: {
        first: parseInt(limit),
        query: queryString,
      },
    });

    data && setTheData(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    GET_REPOS();
  }, [language, filter, limit]);

  return (
    <>
      {loading ? (
        <Text style={{color: "white"}}>Loading....</Text>
      ) : (
        theData.search.edges.map((item, index) => (
          <View key={index} style={repoStyles.repo}>
            <TouchableOpacity onPress={() => navigation.navigate("RepoDetail", item)}>
              {/* <Button title="Test" /> */}
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
            </TouchableOpacity>
          </View>
        ))
      )}
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
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  stars: {
    width: "50%",
    backgroundColor: "#eb7e02",
    color: "white",
    fontSize: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});
