import React, {useEffect, useRef} from 'react';
import {Image, View, Text, StyleSheet, Animated} from 'react-native';

const visa = require('../../images/visa.png');
const mastercard = require('../../images/mastercard.png');
const discover = require('../../images/discover.png');
const amex = require('../../images/amex.png');

const CardFront = ({
  selected,
  cardNo,
  cardHolder,
  expireMonth,
  expireYear,
  issuer,
}) => {
  const spinAnim = useRef(new Animated.Value(0)).current; // initial value

  useEffect(() => {
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '0deg'],
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
      style={[styles.imageContainer, {transform: [{rotateY: spin}]}]}>
      <Image style={styles.img} source={require('../../images/22.jpeg')} />
      <View style={styles.imgCont}>
        <Image
          style={styles.chipImg}
          source={require('../../images/chip.png')}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginRight: 10,
          }}>
          <Image
            resizeMode="contain"
            style={styles.smallImg}
            source={cardIssuer}
          />
        </View>
      </View>

      <View
        style={[
          styles.cardNo,
          selected == 0 && {
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 5,
          },
        ]}>
        <Text style={{color: 'white', fontSize: 15}}>{cardNo}</Text>
      </View>

      <View style={styles.cInfo}>
        <View
          style={[
            styles.cHolder,
            selected == 1 && {
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: 5,
            },
          ]}>
          <Text style={{color: 'gray', fontSize: 12}}>Card holder</Text>
          <Animated.Text style={{color: 'white'}}>
            {cardHolder == '' ? 'JOHN DOE' : cardHolder.toUpperCase()}{' '}
          </Animated.Text>
        </View>

        <View
          style={[
            styles.expires,
            (selected == 2 || selected == 3) && {
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: 5,
            },
          ]}>
          <Text style={{color: 'gray', fontSize: 12}}>Expire</Text>
          <Text style={{color: 'white'}}>
            {expireMonth == ''
              ? 'MM'
              : parseInt(expireMonth) < 10
              ? '0' + expireMonth
              : expireMonth}{' '}
            /{expireYear == '' ? 'YY' : expireYear.substr(2, 3)}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  // Frontside of card
  imageContainer: {
    position: 'absolute',
    width: '80%',
    height: 180,
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 10,
  },

  imgCont: {
    position: 'absolute',
    top: 20,
    height: 50,
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    borderWidth: 1,
  },

  smallImg: {
    width: 100,
    height: 40,
    margin: 2,
  },
  chipImg: {
    // flex: 1,
    width: 50,
    height: 40,
    borderRadius: 8,
    marginRight: 20,
  },
  cardNo: {
    position: 'absolute',
    marginLeft: 20,
    width: '85%',
    color: 'red',
    padding: 5,
  },

  cInfo: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    width: '85%',
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 5,
  },
  cHolder: {
    width: '70%',
    padding: 5,
    justifyContent: 'center',
  },

  expires: {
    padding: 5,
    justifyContent: 'center',
  },
});
export default CardFront;
