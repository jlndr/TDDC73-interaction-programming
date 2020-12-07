import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Snackbar from './Snackbar';
const snackTest = () => {
  const [snackStyle, setSnackStyle] = useState('info');
  const [show, setShow] = useState(false);
  return (
    <>
      <View style={styles.testWrap}>
        <Button
          title="Error"
          onPress={() => {
            setSnackStyle('error');
            setShow(true);
          }}
        />
        <Button
          title="Complete"
          onPress={() => {
            setSnackStyle('complete');
            setShow(true);
          }}
        />
        <Button
          title="Warning"
          onPress={() => {
            setSnackStyle('warning');
            setShow(true);
          }}
        />
        <Button
          title="Info"
          onPress={() => {
            setSnackStyle('info');
            setShow(true);
          }}
        />
        {/* <View>
        <View
          style={{
            width: 200,
            alignSelf: 'center',
            height: 200,
            // backgroundColor: 'red',
            justifyContent: 'center',
          }}>
          <View
            style={{
              // flex: 1,

              width: '90%',
              height: '90%',
              alignSelf: 'center',
              elevation: 10,
              backgroundColor: 'rgba(1, 1, 1, 0.9)',
            }}></View>
        </View>
      </View> */}
      </View>
      <Snackbar
        style={snackStyle}
        show={show} //Defaults false
        message={'Hallå eller'} //Default "This is ${style} message"
        setShow={setShow}
        // snackColor={'#ededed'} // Default: color of choosen style
        // textColor={'black'} //default : white
        // hideButton={false} //Default : false unless slideOut is true
        // slideOut={false} //default: true
        slideOutAfter={5000} //default: 4000ms
      />
    </>
  );
};

const styles = StyleSheet.create({
  testWrap: {flex: 1},
});

export default snackTest;
