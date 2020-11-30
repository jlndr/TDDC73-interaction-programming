import React, {useState} from "react";

import {Text, View, StyleSheet} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Item = ({title, number, total, status, iconSize}) => {
	let iconName = "";

	switch (status) {
		case "active":
			iconName = "checkbox-blank-circle";
			break;
		case "done":
			iconName = "check-circle";
			break;
		case "incomplete":
			iconName = "checkbox-blank-circle-outline";
			break;
		case "error":
			iconName = "close-circle";
			break;
		default:
			iconName = iconName = "checkbox-blank-circle-outline";
			break;
	}

	let size = iconSize ? iconSize : 60;

	//,{position: "absolute", backgroundColor: "red", zIndex: 3, elevation: 3, top: 0}
	return (
		<>
			{status == "ghost" ? (
				<View style={style.ghost}>
					<Icon name="chevron-double-right" color="white" size={iconSize} />
				</View>
			) : (
				<View style={style.wrap}>
					<View style={style.container}>
						<Text style={[style.text, style.small]}>
							Step {number}/{total}
						</Text>

						<View style={{backgroundColor: "black"}}>
							<Icon name={iconName} color="white" size={size} />
						</View>

						<Text style={[style.text, style.big]}>{title}</Text>
					</View>
				</View>
			)}
		</>
	);
};

export default Item;

const style = StyleSheet.create({
	ghost: {
		width: "33.3%",
		backgroundColor: "black",
		alignItems: "center",
		justifyContent: "center",
	},
	wrap: {
		alignItems: "center",
		flex: 1,
		// borderColor: "red",
		// borderWidth: 1,
		// justifyContent: "center",
	},
	container: {
		// borderColor: "blue",
		// borderWidth: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		color: "white",
		textAlign: "center",
		// borderWidth: 1,
		// borderColor: "red",
	},
	small: {
		fontSize: 12,
	},
	big: {
		fontSize: 18,
	},
});
