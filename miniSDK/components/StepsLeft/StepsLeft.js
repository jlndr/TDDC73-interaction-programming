import React, {useState, useRef, useEffect} from "react";

import {View, StyleSheet, Animated} from "react-native";

import Item from "./Item";

const StepsLeft = ({items, activeIndex, options}) => {
	//Errorhandling
	// if (activeIndex < 0) throw new Error(`Active Index cannot be negative. Got ${activeIndex}.`);
	// if (items.length < 1) throw new Error(`Items array must contain atlest one item. Got ${items.length}.`);
	// if (activeIndex > items.length - 1)
	// 	throw new Error(
	// 		`Active Index cannot be greater or equal than length of Items array (${items.length}). Got ${activeIndex}.`,
	// 	);

	const iconSize = 30;
	const numbItems = 3;
	let itemsCopy = items;
	// const ghost = {title: "", status: "ghost"};

	//For preventing crashes in debugging
	let index = activeIndex;
	if (index < 0) index = 0;
	if (index > items.length - 1) index = items.length - 1;

	let left = index - 1;
	let right = index + 2;
	if (index == 0) {
		left = index;
		right = index + 3;
	} else if (index == items.length - 1) {
		left = index - 2;
		right = index + 1;
	}

	let itemsToRender = itemsCopy.slice(left, right);

	//Items before active should be done
	for (let i = 0; i < index; ++i) {
		itemsCopy[i].status = "done";
	}
	for (let i = index + 1; i < itemsCopy.length - 1; ++i) {
		itemsCopy[i].status = "incomplete";
	}
	itemsCopy[index].status = "active";

	let userStyles = {};
	if (options) {
		userStyles.backgroundColor = options?.backgroundColor;
		userStyles.borderBottomColor = options?.color;
		userStyles.color = options?.color;
	}

	//Animation

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
							userStyles={userStyles}
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
		backgroundColor: "black",
		color: "white",
		height: 75,
	},
	line: {
		top: "45%", //hmm
		width: "100%",
		borderBottomColor: "white",
		borderBottomWidth: 1,
	},
	items: {
		position: "absolute",
		top: 0,
		left: 0,
		height: 100,
		width: "100%",

		flexDirection: "row",
		justifyContent: "space-between",
	},
	// text: {
	// 	color: "white",
	// },
});
