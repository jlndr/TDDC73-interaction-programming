import React from "react";

import {View, StyleSheet} from "react-native";

import Item from "./Item";

const StepsLeft = ({items, activeIndex, options, colors}) => {
	//Errorhandling
	if (activeIndex < 0) throw new Error(`Active Index cannot be negative. Got ${activeIndex}.`);
	if (items.length < 1) throw new Error(`Items array must contain atlest one item. Got ${items.length}.`);
	if (activeIndex > items.length - 1)
		throw new Error(
			`Active Index cannot be greater or equal than length of Items array (${items.length}). Got ${activeIndex}.`,
		);

	let index = activeIndex;
	// Use these for developmen to prevent crashes
	// if (index < 0) index = 0;
	// if (index > items.length - 1) index = items.length - 1;

	let left = index - 1;
	let right = index + 2;
	if (index == 0) {
		left = index;
		right = index + 3;
	} else if (index == items.length - 1) {
		left = index - 2;
		right = index + 1;
	}

	let itemsToRender = items.slice(left, right);

	//Items before active should be done
	for (let i = 0; i < index; ++i) {
		items[i].status = "done";
	}
	for (let i = index + 1; i < items.length - 1; ++i) {
		items[i].status = "incomplete";
	}

	items[index].status = "active"; // Set current item to active
	if (index == items.length - 1) items[index].status = "done"; //If its the last item, set it to done

	let userStyles = {backgroundColor: "black", color: "white"};
	if (options) {
		userStyles.backgroundColor = options?.backgroundColor;
		userStyles.borderBottomColor = options?.color;
		userStyles.color = options?.color;
	}

	const iconSize = 30;

	return (
		<View style={[style.default, userStyles, {width: "100%"}]}>
			<View style={[style.line, userStyles]}></View>
			<View style={[style.items]}>
				{itemsToRender.map((item, i) => {
					let number = index == 0 ? 0 : index == items.length - 1 ? -2 : -1;
					return (
						<Item
							key={i}
							title={item.title}
							iconSize={iconSize}
							status={item.status}
							number={index + i + number}
							total={items.length}
							options={userStyles}
							colors={colors}
						/>
					);
				})}
			</View>
		</View>
	);
};

export default StepsLeft;

const style = StyleSheet.create({
	default: {
		marginTop: 10,
		backgroundColor: "white",
		height: 75,
	},
	line: {
		top: "43%",
		width: "100%",
		borderBottomColor: "black",
		borderBottomWidth: 1,
	},
	items: {
		top: 0,
		left: 0,
		height: 100,
		width: "100%",

		flexDirection: "row",
		justifyContent: "space-between",
	},
});

/*

//Example usage
const items = [
		{title: "Name", status: "incomplete"}, //0
		{title: "Email", status: "incomplete"}, //1
		{title: "Password", status: "incomplete"}, //2
		{title: "Adress", status: "incomplete"}, //3
		{title: "City", status: "incomplete"}, //4
		{title: "Country", status: "incomplete"}, //5
	];
	const options = {backgroundColor: "#001313", color: "#eb7e02"};

	const [current, setCurrent] = useState(0);

*/
