import React, {useState, useEffect, useRef} from "react";
import {StyleSheet, View, Text, Animated, TouchableOpacity, Dimensions} from "react-native";

const windowHeight = Dimensions.get("window").height;
const Snackbar = (props) => {
	// Ternary operations that checks if som of the user settings are passed down as props
	let style = props.style ? props.style : "complete";
	let message = props.message ? props.message : `This is ${style} message`;
	let slideOut = props.slideOut == false ? false : true;
	let slideOutAfter = props.slideOutAfter ? props.slideOutAfter : 4000;
	let hideButton = props.hideButton || !slideOut ? true : false;

	let snackColor = props.snackColor
		? props.snackColor
		: style == "info"
		? "#1c4540"
		: style == "error"
		? "#941212"
		: style == "warning"
		? "#e69010"
		: "green";

	// -------------------

	const slideIn = useRef(new Animated.Value(500)).current; // initial value
	// Use effect functions that handles the timing of the animation of the snacbkar, as well as the slide out after certain time
	useEffect(() => {
		if (props.show) {
			Animated.timing(slideIn, {
				toValue: 0,
				duration: 800,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(slideIn, {
				toValue: 2000,
				duration: 2000,
				useNativeDriver: true,
			}).start();
		}
	}, [props.show]);

	useEffect(() => {
		if (props.show && slideOut && props.setShow) {
			setTimeout(() => {
				props.setShow(false);
			}, slideOutAfter);
		}
	}, [props.show]);

	return (
		<>
			<Animated.View
				style={[
					styles.snackWrap,
					{
						backgroundColor: snackColor,
						transform: [{translateY: slideIn}],
						justifyContent: hideButton ? "space-between" : "center",
					},
				]}>
				<View style={styles.messageContainer}>
					<Text style={[styles.message, {color: props.textColor ? props.textColor : "white"}]}>{message}</Text>
				</View>
				{hideButton && (
					<TouchableOpacity style={styles.hideButton} onPress={() => props.setShow(false)}>
						<Text style={{color: "white", fontWeight: "700"}}>Hide</Text>
					</TouchableOpacity>
				)}
			</Animated.View>
		</>
	);
};

const styles = StyleSheet.create({
	snackWrap: {
		width: "90%",
		// backgroundColor: '#f57f0a',
		height: 70,
		alignSelf: "center",

		borderRadius: 5,
		justifyContent: "center",
		padding: 10,
		position: "absolute",
		bottom: 20,
		// marginBottom: 20,
		flexDirection: "row",
		// justifyContent: 'space-between',
		alignItems: "center",
	},

	messageContainer: {
		// borderWidth: 1,
		// borderColor: 'red',
		// flex: 0.7,
		alignSelf: "center",
		maxWidth: "80%",
		maxHeight: "90%",
		overflow: "hidden",
		flexWrap: "wrap",
	},
	message: {
		fontSize: 20,
		// alignSelf: 'center',
		textAlign: "center",
	},
	hideButton: {
		backgroundColor: "black",
		width: 50,
		height: 30,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		// position: 'absolute',
		// right: 10,
		// top: '50%',
	},
});

export default Snackbar;
