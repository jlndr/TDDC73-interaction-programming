import React from "react";

import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";

const Step5 = ({page, setPage}) => {
	return (
		<>
			<View style={styles.stepWrap}>
				<Text style={styles.stepName}>Order completed</Text>
				<View style={styles.stepFields}>
					<Text style={styles.message}>Your order was succesfully completed!</Text>

					<Text style={styles.message}>Your order number : {Math.floor(Math.random() * 1000000)}</Text>
				</View>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.nextButton} onPress={() => setPage(page > 0 ? page - 1 : 0)}>
					<Text style={{color: "white", fontSize: 18}}>Back</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.nextButton} onPress={() => setPage(0)}>
					<Text style={{color: "white", fontSize: 18}}>New order</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	stepWrap: {
		width: "90%",
		flex: 1,
		marginBottom: 20,
		alignItems: "center",
	},
	stepName: {
		color: "white",
		fontSize: 20,
	},
	stepFields: {
		marginTop: 10,

		width: "95%",
		flex: 0.9,
		alignItems: "center",
		marginTop: 20,
	},
	message: {
		marginTop: 20,
		color: "white",
		fontSize: 18,
	},
	buttons: {
		position: "absolute",
		bottom: 20,
		width: "80%",
		height: 60,
		flexDirection: "row",
		justifyContent: "center",
		// padding: 10,
	},
	nextButton: {
		backgroundColor: "#eb7e02",
		padding: 10,
		margin: 10,
		borderRadius: 5,
		width: 120,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Step5;
