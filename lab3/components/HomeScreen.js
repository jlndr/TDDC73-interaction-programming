import React, {useState} from "react";
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar} from "react-native";
import Options from "./Options";
import Repos from "./Repos";

const HomeScreen = ({navigation}) => {
  const [language, setLanguage] = useState("All");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <Options language={language} setLanguage={setLanguage} />
            </View>
            <Repos language={language} navigation={navigation} />
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

export default HomeScreen;
