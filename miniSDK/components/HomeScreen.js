import React, {useState} from "react";
import {StatusBar, SafeAreaView, ScrollView, StyleSheet, View, Text, Dimensions} from "react-native";
import SnackTest from "./SnackTest";
import SnackBar from "./Snackbar";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import StepsLeft from "./StepsLeft";

const HomeScreen = () => {
	//example usage
	const items = [
		{title: "Cart", status: "incomplete"}, //0
		{title: "Order info", status: "incomplete"}, //1
		{title: "Shipping", status: "incomplete"}, //2
		{title: "Payment", status: "incomplete"}, //3
		{title: "Completed", status: "incomplete"}, //4
	];
	const options = {backgroundColor: "#006666", color: "white"};

	const [page, setPage] = useState(0);

	const [show, setShow] = useState(false);
	const [snackType, setSnackType] = useState("error");
	const [message, setMessage] = useState("");

	return (
		<View style={styles.pageWrap}>
			<StatusBar barStyle="dark-content" />
			<ScrollView>
				<StepsLeft items={items} activeIndex={page} options={options} />
				<PlaceOrder
					setShow={setShow}
					setSnackType={setSnackType}
					page={page}
					setPage={setPage}
					setMessage={setMessage}
				/>
			</ScrollView>
			<SnackBar show={show} setShow={setShow} style={snackType} message={message} hideButton={true} />
		</View>
	);
};

const styles = StyleSheet.create({
	pageWrap: {
		flex: 1,
	},
});

export default HomeScreen;
