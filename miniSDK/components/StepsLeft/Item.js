import React, {useState, useEffect, useRef} from "react";

import {Text, View, StyleSheet, Animated} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Item = ({title, number, total, status, iconSize, userStyles}) => {
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
	let color = userStyles.color ? userStyles.color : "white";

	return (
		<>
			{status == "ghost" ? (
				<View style={[style.ghost, userStyles]}>
					<Icon name="chevron-double-right" color={color} size={iconSize} />
				</View>
			) : (
				<Animated.View style={[style.wrap]}>
					<View style={style.container}>
						<Text style={[style.text, userStyles, style.small]}>
							Step {number + 1}/{total}
						</Text>

						<View style={[{backgroundColor: "black"}, userStyles]}>
							<Icon name={iconName} color={color} size={size} />
						</View>

						<Text style={[style.text, userStyles, style.big]}>{title}</Text>
					</View>
				</Animated.View>
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
	},
	container: {
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		color: "white",
		textAlign: "center",
	},
	small: {
		fontSize: 12,
	},
	big: {
		fontSize: 18,
	},
});
