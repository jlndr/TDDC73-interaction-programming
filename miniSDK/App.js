import React, {useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import './components/Snackbar';
import Snackbar from './components/Snackbar';
import SnackTest from './components/SnackTest';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          // contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{flexGrow: 1}}
          style={styles.scrollView}>
          <View style={styles.pageWrap}>
            <SnackTest />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#001313',
    // backgroundColor: 'white',
  },
  pageWrap: {
    flex: 1,
    // backgroundColor: 'blue',

    height: 660,
    // flex: 1,
  },
});

export default App;
