import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Step3 = ({page, setPage}) => {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <View style={styles.stepWrap}>
        <Text style={styles.stepName}>Shipping</Text>
        <View style={styles.stepFields}>
          <View style={styles.optionBox}>
            <View style={styles.optionWrap}>
              <Text style={styles.optionText}>Standard (49kr): </Text>
              <TouchableOpacity
                style={[
                  styles.option,
                  {backgroundColor: selected == 1 ? '#eb7e02' : 'white'},
                ]}
                onPress={() => setSelected(1)}
              />
            </View>

            <View style={styles.optionWrap}>
              <Text style={styles.optionText}>Express (120kr): </Text>
              <TouchableOpacity
                style={[
                  styles.option,
                  {backgroundColor: selected == 2 ? '#eb7e02' : 'white'},
                ]}
                onPress={() => setSelected(2)}
              />
            </View>

            <View style={styles.optionWrap}>
              <Text style={styles.optionText}>instabox (65kr): </Text>
              <TouchableOpacity
                style={[
                  styles.option,
                  {backgroundColor: selected == 3 ? '#eb7e02' : 'white'},
                ]}
                onPress={() => setSelected(3)}
              />
            </View>
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
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  stepName: {
    color: 'white',
    fontSize: 20,
    // textAlign: 'center',
  },
  stepFields: {
    marginTop: 10,
    width: '95%',
    flex: 0.9,
    alignItems: 'center',
  },
  optionBox: {
    width: '100%',
    flex: 0.5,
    alignItems: 'center',
  },
  optionWrap: {
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    margin: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 20,
    width: 200,
  },
  option: {
    borderWidth: 2,
    borderColor: 'black',
    width: 25,
    borderRadius: 100,
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

export default Step3;
