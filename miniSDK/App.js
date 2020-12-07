/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from "react";
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button} from "react-native";

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import StepsLeft from "./components/StepsLeft";

const App = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
					<StepsLeft items={items} activeIndex={current} options={options} colors={true} />
					<View style={{flexDirection: "row", justifyContent: "center"}}>
						<Button color="green" title="LEFT" onPress={() => setCurrent(current - 1)} />
						<Button title="RIGHT" onPress={() => setCurrent(current + 1)} />
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: "absolute",
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: "400",
		color: Colors.dark,
	},
	highlight: {
		fontWeight: "700",
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: "600",
		padding: 4,
		paddingRight: 12,
		textAlign: "right",
	},
});

export default App;
