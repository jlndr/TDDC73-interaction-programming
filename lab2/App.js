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
                            <View style={styles.imageContainerBack}>
                                <Image style={styles.imgBack} source={require("./images/22.jpeg")} />
                                <View style={styles.magStrip}></View>
                                <View style={styles.cvvWrapper}>
                                    <Text style={{color: "white", fontSize: 12}}>CVV</Text>
                                    <Text style={styles.cvv}> {cvv} </Text>
                                </View>
                                <Image style={styles.smallImgBack} source={require("./images/visa.png")} />
                            </View>
                        ) : (
                            <View style={styles.imageContainer}>
                                <Image style={styles.img} source={require("./images/22.jpeg")} />
                                <Image style={styles.smallImg} source={require("./images/visa.png")} />
                                <Image style={styles.chipImg} source={require("./images/chip.png")} />

                                <View
                                    style={[
                                        styles.cardNo,
                                        selected == 0 && {borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.5)", borderRadius: 5},
                                    ]}>
                                    <Text style={{color: "white"}}>{cardNo == "" ? "#### #### #### ####" : cardNo}</Text>
                                </View>

                                <View style={styles.cInfo}>
                                    <View
                                        style={[
                                            styles.cHolder,
                                            selected == 1 && {borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.5)", borderRadius: 5},
                                        ]}>
                                        <Text style={{color: "gray", fontSize: 12}}>Card holder</Text>
                                        <Text style={{color: "white"}}> {cardHolder == "" ? "LARSA" : cardHolder} </Text>
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
                                            {expireMonth == "" ? "MM" : expireMonth} / {expireDate == "" ? "YY" : expireDate}
                                        </Text>
                                    </View>
                                </View>
                            </View>
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
    // backside of card
    imageContainerBack: {
        position: "absolute",
        width: "80%",
        height: 180,
        alignItems: "center",
        elevation: 10,
    },
    imgBack: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        transform: [{rotate: "180deg"}],
    },
    magStrip: {
        width: "100%",
        height: 40,
        position: "absolute",
        backgroundColor: "black",
        top: 20,
        opacity: 0.8,
    },
    cvvWrapper: {
        width: "80%",
        height: 40,
        position: "absolute",
        bottom: 70,
        flex: 1,
        alignItems: "flex-end",
    },
    cvv: {
        width: "100%",
        backgroundColor: "white",
        height: 30,
        borderRadius: 5,
    },
    smallImgBack: {
        position: "absolute",
        width: 60,
        height: 30,
        right: 10,
        bottom: 8,
        margin: 10,
        opacity: 0.7,
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
