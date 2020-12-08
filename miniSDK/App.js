import React, {useState} from "react";
import "./components/Snackbar";

import {NavigationContainer, StackActions} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();
const App = () => {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							headerShown: false,
							cardStyle: {backgroundColor: "#001313"},
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
