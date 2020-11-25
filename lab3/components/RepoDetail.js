import React, {useState} from "react";
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from "react-native";
import Options from "./Options";

const RepoDetail = ({navigation, route}) => {
  const repo = route.params.node;
  // console.log("JÖGGGE123123", route.params.node.name);
  const [language, setLanguage] = useState("All");
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <Options language={language} setLanguage={setLanguage} />
            </View>
            <View style={styles.content}>
              <Text style={styles.headline}>{repo.name}</Text>
              <Text style={styles.description}>{repo.description}</Text>
              <View style={styles.data}>
                <View style={styles.dataRow}>
                  <Text style={styles.textRow}>Forks: </Text>
                  <Text style={styles.textRow}>{repo.forkCount} </Text>
                </View>
                <View style={styles.dataRow}>
                  <Text style={styles.textRow}>Commits: </Text>
                  <Text style={styles.textRow}>{repo.object.history.totalCount} </Text>
                </View>
                <View style={styles.dataRow}>
                  <Text style={styles.textRow}>Stars: </Text>
                  <Text style={styles.textRow}>{repo.stargazerCount} </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#001313",
  },
  wrapper: {
    width: "100%",
    alignItems: "center",
    color: "white",
  },

  header: {
    width: "100%",

    borderRadius: 5,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003d3d",
    color: "white",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  content: {
    width: "95%",
    height: 700,
    backgroundColor: "#006666",
    borderRadius: 5,
    padding: 20,
  },
  headline: {
    color: "white",
    fontSize: 24,
    alignSelf: "center",
  },
  description: {
    fontSize: 18,
    color: "rgb(200, 200, 200)",
    textAlign: "center",
    marginTop: 20,
  },
  data: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  dataRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  textRow: {
    color: "white",
    fontSize: 16,
    margin: 20,
  },
});

export default RepoDetail;
