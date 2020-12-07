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
import PlaceOrder from './PlaceOrder/PlaceOrder';

const HomeScreen = () => {
  return (
    <View style={styles.pageWrap}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <PlaceOrder />
      </ScrollView>
      {/* <SnackTest /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrap: {
    flex: 1,
  },
});

export default HomeScreen;
