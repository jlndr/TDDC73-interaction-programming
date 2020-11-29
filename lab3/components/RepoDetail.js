import React, {useState} from "react";
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Button} from "react-native";
import Options from "./Options";

const RepoDetail = ({navigation, route}) => {
  const repo = route.params.node;

  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.wrapper}>
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

                <View style={styles.dataRow}>
                  <Text style={styles.textRow}>Pull requests: </Text>
                  <Text style={styles.textRow}>{repo.pullRequests.totalCount} </Text>
                </View>

                <View style={styles.dataRow}>
                  <Text style={styles.textRow}>Issues: </Text>
                  <Text style={styles.textRow}>{repo.issues.totalCount} </Text>
                </View>

                {repo.licenseInfo && (
                  <View style={styles.dataRow}>
                    <Text style={styles.textRow}>License: </Text>
                    <Text style={styles.textRow}>{repo.licenseInfo.name} </Text>
                  </View>
                )}
              </View>

              <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
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
  content: {
    marginTop: 20,
    marginBottom: 20,
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
    maxWidth: 150,
  },
  backButton: {
    width: "50%",
    height: 50,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    backgroundColor: "#eb7e02",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});

export default RepoDetail;
