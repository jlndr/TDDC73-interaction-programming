import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
const h = Dimensions.get('window').height;
const PlaceOrder = () => {
  const [page, setPage] = useState(0);
  return (
    <View style={styles.wrap}>
      <View style={styles.content}>
        {page == 0 && <Step1 page={page} setPage={setPage} />}
        {page == 1 && <Step2 page={page} setPage={setPage} />}
        {page == 2 && <Step3 page={page} setPage={setPage} />}
        {page == 3 && <Step4 page={page} setPage={setPage} />}
        {page == 4 && <Step5 page={page} setPage={setPage} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    height: h,
    alignItems: 'center',
    flex: 1,
  },
  content: {
    backgroundColor: '#006666',
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    width: '95%',
    borderRadius: 5,
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default PlaceOrder;
