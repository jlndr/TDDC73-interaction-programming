import React, {FC, useEffect, useRef} from "react";
import {Image, View, Text, StyleSheet, Animated} from "react-native";

interface Props {
   selected: number;
   cardNo:  string;
   cardHolder: string;
   expireMonth: string;
   expireYear: string;
}

const CardFront: FC<Props> = ({selected, cardNo, cardHolder, expireMonth, expireYear}) => {
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
      outputRange: ["-90deg", "0deg"],
   });

   let hashes = "####    ####		####		####";

   return (
      <Animated.View style={[styles.imageContainer, {transform: [{rotateY: spin}]}]}>
         <Image style={styles.img} source={require("../images/22.jpeg")} />
         <Image style={styles.smallImg} source={require("../images/visa.png")} />
         <Image style={styles.chipImg} source={require("../images/chip.png")} />

         <View style={[styles.cardNo, selected == 0 && {borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.5)", borderRadius: 5}]}>
            <Text style={{color: "white", fontSize: 15}}>{cardNo == "" ? hashes : cardNo}</Text>
         </View>

         <View style={styles.cInfo}>
            <View style={[styles.cHolder, selected == 1 && {borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.5)", borderRadius: 5}]}>
               <Text style={{color: "gray", fontSize: 12}}>Card holder</Text>
               <Animated.Text style={{color: "white"}}>{cardHolder == "" ? "JOHN DOE" : cardHolder.toUpperCase()} </Animated.Text>
            </View>

            <View
               style={[
                  styles.expires,
                  (selected == 2 || selected == 3) && {
                     borderWidth: 1,
                     borderColor: "rgba(255, 255, 255, 0.5)",
                     borderRadius: 5,
                  },
               ]}>
               <Text style={{color: "gray", fontSize: 12}}>Expire</Text>
               <Text style={{color: "white"}}>
                  {expireMonth == "" ? "MM" : parseInt(expireMonth) < 10 ? "0" + expireMonth : expireMonth} /
                  {expireYear == "" ? "YY" : expireYear.substr(2,3)}
               </Text>
            </View>
         </View>
      </Animated.View>
   );
};

const styles = StyleSheet.create({
   imageContainer: {
      // marginTop: 30,
      position: "absolute",
      width: "80%",
      height: 180,
      justifyContent: "center",
      marginBottom: 30,
      elevation: 10,
   },
   // Frontside of card
   img: {
      width: "100%",
      height: "100%",
      borderRadius: 15,
   },

   smallImg: {
      position: "absolute",
      width: 60,
      height: 30,
      right: 10,
      top: 10,
      margin: 10,
   },
   chipImg: {
      width: 50,
      height: 40,
      position: "absolute",
      left: 10,
      top: 10,
      borderRadius: 8,
      margin: 5,
   },
   cardNo: {
      position: "absolute",
      marginLeft: 20,
      width: "85%",
      color: "red",
      padding: 5,
   },

   cInfo: {
      position: "absolute",
      bottom: 5,
      left: 5,
      width: "85%",
      height: 50,
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 10,
      padding: 5,
   },
   cHolder: {
      width: "70%",
      padding: 5,
      justifyContent: "center",
   },

   expires: {
      padding: 5,
      justifyContent: "center",
   },
});
export default CardFront;
