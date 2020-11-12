/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.scrollView}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.headline}>Example 1</Text>
          </View>

          <View style={styles.imgContainer}>
            <Image style={{width: 200, height: 200}} source={require("./babu-frik.jpg")} />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: "black", fontSize: 20}}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: "black", fontSize: 20}}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: "black", fontSize: 20}}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: "black", fontSize: 20}}>Button</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              padding: 50,
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Text style={{flex: 1}}> Email</Text>
            <TextInput
              style={{
                flex: 3,
                height: 40,
                borderColor: "#d95b8c",
                borderBottomWidth: 3,
              }}
              value=""
              selectionColor="#d95b8c"></TextInput>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2d8577",
    height: 70,
  },

  headline: {
    color: "white",
    padding: 20,
    fontSize: 20,
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 50,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#a9a9a9",
    padding: 15,
    width: 120,
    marginTop: 30,
    borderRadius: 5,
  },
});

export default App;
