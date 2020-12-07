import React, {useRef, useEffect} from 'react';
import {Image, View, Text, StyleSheet, Animated} from 'react-native';

const visa = require('../../images/visa.png');
const mastercard = require('../../images/mastercard.png');
const discover = require('../../images/discover.png');
const amex = require('../../images/amex.png');

const CardBack = ({cvv, issuer}) => {
  const spinAnim = useRef(new Animated.Value(0)).current; // initial value for opacity:0

  useEffect(() => {
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '0deg'],
  });
  let cardIssuer;
  switch (issuer) {
    case 'mastercard':
      cardIssuer = mastercard;
      break;
    case 'amex':
      cardIssuer = amex;
      break;
    case 'discover':
      cardIssuer = discover;
      break;
    default:
      cardIssuer = visa;
      break;
  }

  return (
    <Animated.View
      style={[styles.imageContainerBack, {transform: [{rotateY: spin}]}]}>
      <Image style={styles.imgBack} source={require('../../images/22.jpeg')} />
      <View style={styles.magStrip}></View>
      <View style={styles.cvvWrapper}>
        <Text style={{color: 'white', fontSize: 12}}>CVV</Text>
        <Text style={styles.cvv}> {cvv} </Text>
      </View>
      <Image
        resizeMode="contain"
        style={styles.smallImgBack}
        source={cardIssuer}
      />
    </Animated.View>
  );
};

export default CardBack;

const styles = StyleSheet.create({
  // backside of card
  imageContainerBack: {
    position: 'absolute',
    width: '80%',
    height: 180,
    alignItems: 'center',
    elevation: 10,
  },
  imgBack: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    transform: [{rotate: '180deg'}],
  },
  magStrip: {
    width: '100%',
    height: 40,
    position: 'absolute',
    backgroundColor: 'black',
    top: 20,
    opacity: 0.8,
  },
  cvvWrapper: {
    width: '80%',
    height: 40,
    position: 'absolute',
    bottom: 70,
    flex: 1,
    alignItems: 'flex-end',
  },
  cvv: {
    width: '100%',
    backgroundColor: 'white',
    height: 30,
    borderRadius: 5,
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingRight: 5,
  },
  smallImgBack: {
    position: 'absolute',
    width: 60,
    height: 30,
    right: 10,
    bottom: 8,
    margin: 10,
    opacity: 0.7,
  },
});
