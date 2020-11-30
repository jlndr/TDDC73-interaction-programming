import React, {useState} from "react";

import {View, StyleSheet} from "react-native";

import Item from "./Item";

const StepsLeft = ({items, activeIndex}) => {
	const iconSize = 30;
	const numbItems = 3;

	const ghost = {title: "", status: "ghost"};

	items.unshift(ghost);
	items.push(ghost);

	//Errorhandling incorrect active indexes
	if (activeIndex < 1) activeIndex = 1;
	if (activeIndex > items.length - 2) activeIndex = items.length - 2;

	const itemsToRender = items.slice(activeIndex - 1, activeIndex + 2);

	if (itemsToRender.length)
		return (
			<View style={{backgroundColor: "black", width: "100%"}}>
				<View style={[style.line]}></View>
				<View style={style.items}>
					{itemsToRender.map((item, i) => {
						return (
							<Item
								key={i}
								title={item.title}
								iconSize={iconSize}
								status={item.status}
								number={activeIndex - 1 + i}
								total={items.length - 2}
							/>
						);
					})}
				</View>
			</View>
		);
};

export default StepsLeft;

const style = StyleSheet.create({
	line: {
		top: "45%", //hmm
		width: "100%",
		borderBottomColor: "white",
		borderBottomWidth: 1,
	},
	items: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	text: {
		color: "white",
	},
});
