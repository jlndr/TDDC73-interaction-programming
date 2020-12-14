import React from "react";

import {Text, View, StyleSheet} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Item = ({title, number, total, status, iconSize, options, colors}) => {
	let iconName = "";
	let iconColor;

	let userStyles = {};
	if (options) {
		userStyles.backgroundColor = options?.backgroundColor;
		userStyles.borderBottomColor = options?.color;
		userStyles.color = options?.color;
		iconColor = options?.color;
	}

	switch (status) {
		case "active":
			iconName = "checkbox-blank-circle";
			break;
		case "done":
			iconName = "check-circle";
			if (colors) iconColor = "green";
			break;
		case "incomplete":
			iconName = "checkbox-blank-circle-outline";
			break;
		default:
			iconName = iconName = "checkbox-blank-circle-outline";
			break;
	}

	return (
		<>
			<View style={[style.wrap]}>
				<View style={style.container}>
					<Text style={[style.text, userStyles, style.small]}>
						Step {number + 1}/{total}
					</Text>

					<View style={[{backgroundColor: "black"}, userStyles]}>
						<Icon name={iconName} color={iconColor} size={iconSize} />
					</View>

					<Text style={[style.text, userStyles, style.big]}>{title}</Text>
				</View>
			</View>
		</>
	);
};

export default Item;

const style = StyleSheet.create({
	wrap: {
		alignItems: "center",
		flex: 1,
	},
	container: {
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		color: "black",
		textAlign: "center",
	},
	small: {
		fontSize: 12,
	},
	big: {
		fontSize: 18,
	},
});
