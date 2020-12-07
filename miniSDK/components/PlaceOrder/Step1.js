import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';

const Step1 = ({page, setPage}) => {
  return (
    <>
      <View styles={styles.stepWrap}>
        <Text style={styles.stepName}> Cart</Text>
        <View style={styles.orderItem}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemText}> Your order: </Text>
            <Text style={styles.itemText}> Babu Frik Toy</Text>
            <Text style={styles.itemText}> Price: 120kr</Text>
          </View>
          <View style={styles.imgWrap}>
            <Image style={styles.img} source={require('../../babu.jpg')} />
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => setPage(page > 0 ? page - 1 : 0)}>
          <Text style={{color: 'white', fontSize: 18}}>Back</Text>
        </TouchableOpacity>
        {page != 4 && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => setPage(page + 1)}>
            <Text style={{color: 'white', fontSize: 18}}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  stepWrap: {
    width: '90%',
    flex: 1,
    marginBottom: 20,
    // marginTop: 20,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    // flexDirection: 'column',
    justifyContent: 'center',
  },
  stepName: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  orderItem: {
    width: '80%',
    height: 150,
    marginTop: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemInfo: {
    width: '40%',
    height: '100%',
    // marginTop: 10,
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  imgWrap: {
    width: '50%',
    height: '100%',
    // borderWidth: 1,
    // borderColor: 'blue',
    // flex: 1,
  },
  img: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  buttons: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    // padding: 10,
  },
  nextButton: {
    backgroundColor: '#eb7e02',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Step1;
