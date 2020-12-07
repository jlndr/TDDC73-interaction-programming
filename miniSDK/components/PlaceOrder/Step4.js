/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from "react";
import {Button, StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";
import {Picker} from "@react-native-picker/picker";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Step4 = ({page, setPage, setShow, setSnackType, setMessage}) => {
	const months = ["MM", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	const years = ["YY", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027"];

	const [cardNo, setCardNo] = useState("");
	const [cardHolder, setCardHolder] = useState("");
	const [expireMonth, setExpireMonth] = useState("");
	const [expireYear, setExpireYear] = useState("");
	const [cvv, setCvv] = useState("");
	const [selected, setSelected] = useState(-1);
	const [numberField, setNumberField] = useState("####  ####  ####  ####");
	const [issuer, setIssuer] = useState("visa");
	const [limit, setLimit] = useState(16);

	const cardInput = (text) => {
		text = text.replace(/\s/g, "");
		text.length;
		let s = "";
		let counter = 0;

		for (let i = 0; i < text.length - 1; ++i) {
			s += text[i];
			counter++;
			if (counter == 4) {
				s += "  ";
				counter = 0;
			}
		}

		text.length > 0 ? (s += text[text.length - 1]) : (s = "");

		let first = s.substr(0, 1);

		switch (first) {
			case "4":
				setIssuer("visa");
				setLimit(16);
				break;

			case "5":
				setIssuer("mastercard");
				setLimit(16);
				break;

			case "3":
				setIssuer("amex");
				setLimit(15);
				break;

			case "6":
				setIssuer("discover");
				setLimit(16);
				break;

			default:
				setIssuer("visa");
				setLimit(16);
				break;
		}

		setCardNo(s);
		let n = s.length;
		let tags = "####  ####  ####  ####";
		let str = s + tags.substr(n);

		setNumberField(str);
	};

	const checkNumberField = () => {
		if (cardNo.length < limit + 6) {
			setSnackType("warning");
			setMessage(`Card number needs ${limit} digits`);
			setShow(true);
		}
	};

	const validate = () => {
		if (cardNo != "" && cardHolder != "" && expireMonth != "" && expireYear != "" && cvv != "") {
			if (cardNo.length < limit + 6) {
				setSnackType("error");
				setMessage(`Card number needs ${limit} digits`);
				setShow(true);
			} else if (cvv.length < 3) {
				setSnackType("error");
				setMessage(`Cvv needs 3 digits`);
				setShow(true);
			} else {
				if (expireYear == "2021") {
					setSnackType("complete");
					setMessage(`Payment success`);
					setShow(true);
					setTimeout(() => {
						setPage(page + 1);
					}, 2000);
				} else {
					setSnackType("error");
					setMessage(`Unsufficient funds`);
					setShow(true);
					setTimeout(() => {
						setSnackType("info");
						setMessage("Try another card");
						setShow(true);
					}, 4300);
				}
			}
		} else {
			setSnackType("error");
			setMessage(`Fill out all fields`);
			setShow(true);
		}
	};

	return (
		<>
			<Text style={styles.stepName}>Payment</Text>
			<View style={styles.wrapper}>
				{selected == 4 ? (
					<CardBack cvv={cvv} issuer={issuer} />
				) : (
					<CardFront
						selected={selected}
						cardNo={numberField}
						cardHolder={cardHolder}
						expireMonth={expireMonth}
						expireYear={expireYear}
						issuer={issuer}
					/>
				)}

				<View style={styles.contentWrap}>
					<View style={styles.content}>
						<View>
							<Text style={styles.labels}>Card Number</Text>
							<TextInput
								placeholder=""
								keyboardType="numeric"
								style={[styles.inputs, styles.largeInput, selected == 0 ? styles.focused : {}]}
								selectionColor={orange}
								maxLength={22}
								value={cardNo}
								onChangeText={(text) => cardInput(text)}
								onFocus={() => setSelected(0)}
								onBlur={() => {
									setSelected(-1);
									checkNumberField();
								}}
							/>
						</View>

						<View>
							<Text style={styles.labels}>Card Holder</Text>
							<TextInput
								style={[styles.inputs, styles.largeInput, selected == 1 ? styles.focused : {}]}
								selectionColor={orange}
								placeholder=""
								maxLength={18}
								value={cardHolder}
								onChangeText={(text) => setCardHolder(text)}
								onFocus={() => setSelected(1)}
								onBlur={() => setSelected(-1)}
							/>
						</View>

						<View style={styles.smallInputContainer}>
							<View style={{flex: 3}}>
								<Text style={styles.labels}>Expiration Date</Text>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
									}}>
									<View
										style={[styles.inputs, styles.smallInput, {flex: 3}, selected == 2 ? styles.focused : {}]}
										onTouchStart={() => setSelected(2)}>
										<Picker
											prompt="Month"
											mode="dropdown"
											selectedValue={expireMonth}
											onValueChange={(value) => {
												setSelected(-1);
												setExpireMonth(value.toString());
											}}>
											{months.map((month, i) => (
												<Picker.Item key={i} label={month} value={month} />
											))}
										</Picker>
									</View>

									<View
										style={[
											styles.inputs,
											styles.smallInput,
											{flex: 3, marginLeft: 10},
											selected == 3 ? styles.focused : {},
										]}
										onTouchStart={() => setSelected(3)}>
										<Picker
											prompt="Year"
											mode="dropdown"
											selectedValue={expireYear}
											onValueChange={(value) => {
												setExpireYear(value.toString());
											}}>
											{years.map((year, i) => (
												<Picker.Item key={i} label={year} value={year} />
											))}
										</Picker>
									</View>
								</View>
							</View>

							<View style={{flex: 1, paddingLeft: 10}}>
								<Text style={styles.labels}>CVV</Text>
								<View style={{flexDirection: "row"}}>
									<TextInput
										placeholder=""
										keyboardType="numeric"
										maxLength={3}
										onFocus={() => setSelected(4)}
										onBlur={() => setSelected(-1)}
										value={cvv}
										onChangeText={(text) => setCvv(text)}
										style={[styles.inputs, styles.smallInput, selected == 4 ? styles.focused : {}]}
									/>
								</View>
							</View>
						</View>
						<View style={{marginTop: 10, overflow: "hidden", borderRadius: 5}}>
							<Button onPress={() => validate()} title="Submit" color="#ff852e" />
						</View>
					</View>
				</View>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity style={styles.nextButton} onPress={() => setPage(page > 0 ? page - 1 : 0)}>
					<Text style={{color: "white", fontSize: 18}}>Back</Text>
				</TouchableOpacity>
				{page != 3 && (
					<TouchableOpacity style={styles.nextButton} onPress={() => setPage(page + 1)}>
						<Text style={{color: "white", fontSize: 18}}>Next</Text>
					</TouchableOpacity>
				)}
			</View>
		</>
	);
};

const orange = "#ff852e";

const styles = StyleSheet.create({
	stepName: {
		color: "white",
		fontSize: 20,
		// textAlign: 'center',
	},

	wrapper: {
		width: "100%",
		height: 715,
		borderBottomColor: "red",
		marginTop: 20,
		marginBottom: 10,
		alignItems: "center",
	},

	contentWrap: {
		height: 390,
		width: "95%",
		marginTop: 100,
		borderRadius: 10,
		overflow: "hidden",
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 15,
		marginBottom: 10,
		backgroundColor: "white",
	},

	content: {
		width: "100%",
		overflow: "hidden",
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "stretch",
	},

	labels: {
		fontSize: 12,
		fontWeight: "bold",
	},

	inputs: {
		borderWidth: 2,
		borderRadius: 5,
		borderColor: "#dbdbdb",
		height: 50,
		marginBottom: 10,
	},
	largeInput: {},
	smallInputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	smallInput: {
		flex: 2,
		justifyContent: "center",
	},

	focused: {
		borderColor: orange,
	},
	buttons: {
		position: "absolute",

		bottom: 0,
		width: "80%",
		height: 60,
		flexDirection: "row",
		justifyContent: "center",
		// padding: 10,
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

export default Step4;
