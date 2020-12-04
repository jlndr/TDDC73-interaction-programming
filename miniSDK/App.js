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
	const items = [
		{title: "Name", status: "incomplete"}, //0
		{title: "Email", status: "incomplete"}, //1
		{title: "Password", status: "incomplete"}, //2
		{title: "Adress", status: "incomplete"}, //3
		{title: "City", status: "incomplete"}, //4
		{title: "Country", status: "incomplete"}, //5
	];
	const options = {backgroundColor: "white", color: "black"};

	const [current, setCurrent] = useState(0);

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
					<StepsLeft items={items} activeIndex={current} options={options} />
					<View style={{flexDirection: "row", justifyContent: "center"}}>
						<Button color="green" title="LEFT" onPress={() => setCurrent(current - 1)} />
						<Button title="RIGTH" onPress={() => setCurrent(current + 1)} />
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
