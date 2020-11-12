/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from "react";
import {Button, Image, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

const App = () => {
   const months = ["Month", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
   const years = ["Year", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027"];

   const [cardNo, setCardNo] = useState("");
   const [cardHolder, setCardHolder] = useState("");
   const [expireMonth, setExpireMonth] = useState("");
   const [expireDate, setExpireDate] = useState("");
   const [cvv, setCvv] = useState("");
   const [selected, setSelected] = useState(-1);

   return (
      <>
         <StatusBar barStyle="dark-content" />
         <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
               <View style={styles.wrapper}>
                  {selected == 4 ? (
                     <CardBack cvv={cvv} />
                  ) : (
                     <CardFront
                        selected={selected}
                        cardNo={cardNo}
                        cardHolder={cardHolder}
                        expireMonth={expireMonth}
                        expireYear={expireDate}
                     />
                  )}

                  <View style={styles.contentWrap}>
                     <View style={styles.content}>
                        <View>
                           <Text style={styles.labels}>Card Number</Text>
                           <TextInput
                              placeholder=""
                              type="number"
                              keyboardType="numeric"
                              style={[styles.inputs, styles.largeInput, selected == 0 ? styles.focused : {}]}
                              selectionColor={orange}
                              value={cardNo}
                              onChangeText={(text) => setCardNo(text)}
                              onFocus={() => setSelected(0)}
                              onBlur={() => setSelected(-1)}
                           />
                        </View>

                        <View>
                           <Text style={styles.labels}>Card Holder</Text>
                           <TextInput
                              style={[styles.inputs, styles.largeInput, selected == 1 ? styles.focused : {}]}
                              selectionColor={orange}
                              placeholder=""
                              value={cardHolder}
                              onChangeText={(text) => setCardHolder(text)}
                              onFocus={() => setSelected(1)}
                              onBlur={() => setSelected(-1)}
                           />
                        </View>

                        <View style={styles.smallInputContainer}>
                           <View style={{flex: 3}}>
                              <Text style={styles.labels}>Expiration Date</Text>
                              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                 <View
                                    style={[styles.inputs, styles.smallInput, {flex: 3}, selected == 2 ? styles.focused : {}]}
                                    onTouchStart={() => setSelected(2)}>
                                    <Picker
                                       prompt="Month"
                                       mode="dropdown"
                                       onFocus={() => setSelected(2)}
                                       selectedValue={expireMonth}
                                       onValueChange={(value) => {
                                          setSelected(-1);
                                          setExpireMonth(value);
                                       }}>
                                       {months.map((month, i) => (
                                          <Picker.Item key={i} label={month} value={month} />
                                       ))}
                                    </Picker>
                                 </View>

                                 <View
                                    style={[
                                       styles.inputs,
                                       styles.smallInput,
                                       {flex: 3, marginLeft: 10},
                                       selected == 3 ? styles.focused : {},
                                    ]}
                                    onTouchStart={() => setSelected(3)}>
                                    <Picker
                                       prompt="Year"
                                       mode="dropdown"
                                       selectedValue={expireDate}
                                       onValueChange={(value) => {
                                          // setSelected(-1);
                                          setExpireDate(value);
                                       }}>
                                       {years.map((year, i) => (
                                          <Picker.Item key={i} label={year} value={year} />
                                       ))}
                                    </Picker>
                                 </View>

                                 {/* <TextInput style={[styles.inputs, styles.smallInput, {marginLeft: 10}]}></TextInput> */}
                              </View>
                           </View>

                           <View style={{flex: 1, paddingLeft: 10}}>
                              <Text style={styles.labels}>CVV</Text>
                              <View style={{flexDirection: "row"}}>
                                 <TextInput
                                    placeholder=""
                                    type="number"
                                    keyboardType="numeric"
                                    maxLength={3}
                                    onFocus={() => setSelected(4)}
                                    onBlur={() => setSelected(-1)}
                                    value={cvv}
                                    onChangeText={(text) => setCvv(text)}
                                    style={[styles.inputs, styles.smallInput, selected == 4 ? styles.focused : {}]}
                                 />
                              </View>
                           </View>
                        </View>
                        <View style={{marginTop: 10, overflow: "hidden", borderRadius: 5}}>
                           <Button title="Submit" color="#ff852e" />
                        </View>
                     </View>
                  </View>
               </View>
            </ScrollView>
         </SafeAreaView>
      </>
   );
};

const orange = "#ff852e";
const lightOrange = "#ffcfad";

const styles = StyleSheet.create({
   scrollView: {
      //   backgroundColor: "#ffe1d4",
      backgroundColor: lightOrange,
   },

   wrapper: {
      width: "100%",
      height: "100%",
      borderBottomColor: "red",
      marginTop: 20,
      // justifyContent: "center",
      alignItems: "center",
   },

   contentWrap: {
      height: 400,
      width: "95%",
      marginTop: 100,
      borderRadius: 10,
      overflow: "hidden",
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 15,
      backgroundColor: "white",
   },

   content: {
      width: "100%",
      //  marginTop: 100,
      overflow: "hidden",
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "stretch",
   },

   labels: {
      fontSize: 12,
      fontWeight: "bold",
   },

   inputs: {
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#dbdbdb",
      height: 50,
      marginBottom: 10,
   },
   largeInput: {},
   smallInputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
   },

   smallInput: {
      flex: 2,
   },

   focused: {
      borderColor: orange,
   },
});

export default App;
