import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, View, Text, Image} from "react-native";

const Step1 = ({page, setPage, setShow, setSnackType, setMessage}) => {
	const [ok, setOk] = useState(false);

	const validate = () => {
		if (ok) setPage(page + 1);
		else {
			setSnackType("error");
			setShow(true);
			setMessage("Please confirm order");
		}
	};

	return (
		<>
			<View styles={styles.stepWrap}>
				<Text style={styles.stepName}> Cart</Text>
				<View style={styles.orderItem}>
					<View style={styles.itemInfo}>
						<Text style={styles.itemText}> Your order: </Text>
						<Text style={styles.itemText}> Babu Frik Toy</Text>
						<Text style={styles.itemText}> Price: 120kr</Text>
					</View>
					<View style={styles.imgWrap}>
						<Image style={styles.img} source={require("../../babu.jpg")} />
					</View>
				</View>
				<Text style={{color: "white", marginTop: 20, fontSize: 14}}>
					Make sure your order is correct before proceeding
				</Text>
				<View style={styles.optionWrap}>
					<Text style={styles.optionText}>Confirm order: </Text>
					<TouchableOpacity
						style={[styles.option, {backgroundColor: ok ? "#eb7e02" : "white"}]}
						onPress={() => setOk(!ok)}
					/>
				</View>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.nextButton} onPress={() => setPage(page > 0 ? page - 1 : 0)}>
					<Text style={{color: "white", fontSize: 18}}>Back</Text>
				</TouchableOpacity>
				{page != 4 && (
					<TouchableOpacity
						style={styles.nextButton}
						onPress={() => {
							validate();
						}}>
						<Text style={{color: "white", fontSize: 18}}>Next</Text>
					</TouchableOpacity>
				)}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	stepWrap: {
		width: "90%",
		flex: 1,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: "red",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
	},
	stepName: {
		color: "white",
		fontSize: 20,
		textAlign: "center",
	},

	orderItem: {
		width: "80%",
		height: 150,
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	itemInfo: {
		width: "40%",
		height: "100%",
		justifyContent: "center",
	},
	itemText: {
		color: "white",
		fontSize: 16,
		marginBottom: 5,
	},
	imgWrap: {
		width: "50%",
		height: "100%",
	},
	img: {
		borderRadius: 10,
		width: "100%",
		height: "100%",
	},
	optionWrap: {
		justifyContent: "space-between",
		flexDirection: "row",
		marginTop: 20,
	},
	optionText: {
		color: "white",
		fontSize: 20,
		width: 200,
	},
	option: {
		borderWidth: 2,
		borderColor: "black",
		width: 25,
		borderRadius: 100,
	},
	buttons: {
		position: "absolute",
		bottom: 20,
		width: "80%",
		height: 60,
		flexDirection: "row",
		justifyContent: "center",
	},
	nextButton: {
		backgroundColor: "#eb7e02",
		padding: 10,
		margin: 10,
		borderRadius: 5,
		width: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Step1;
