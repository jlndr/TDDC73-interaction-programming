import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import SnackTest from './SnackTest';
import SnackBar from './Snackbar';
const HomeScreen = () => {
  const windowHeight = Dimensions.get('window').height;
  console.log(windowHeight);
  return (
    <View style={styles.pageWrap}>
      <StatusBar barStyle="dark-content" />
      <SnackTest />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: '#001313',
    // backgroundColor: 'white',
  },
  pageWrap: {
    flex: 1,
    // backgroundColor: 'blue',

    // height: 660,
    // flex: 1,
  },
});

export default HomeScreen;
