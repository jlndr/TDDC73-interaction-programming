import React from "react";
import renderer from "react-test-renderer";
import Snackbar from "../components/Snackbar";

// JEST testing
jest.useFakeTimers();

it("renders correctly", () => {
	const tree = renderer.create(<Snackbar />).toJSON();
	expect(tree).toMatchSnapshot();
});

// Warning Snackbar
it("Style prop = warning generates a yellow warning snackbar with 'This is warning message' ", () => {
	const tree = renderer.create(<Snackbar style={"warning"} />).toJSON();
	expect(tree.props.style.backgroundColor).toBe("#e69010");
	expect(tree.children[0].children[0].children[0]).toBe("This is warning message");
});

// Default complete snackbar
it("No style prop provided generates a green warning snackbar with 'This is complete message' ", () => {
	const tree = renderer.create(<Snackbar />).toJSON();
	expect(tree.props.style.backgroundColor).toBe("green");
	expect(tree.children[0].children[0].children[0]).toBe("This is complete message");
});

//Test error snackbar
it("Type warning generates a red warning snackbar with 'This is error message' ", () => {
	const tree = renderer.create(<Snackbar style={"error"} />).toJSON();
	expect(tree.props.style.backgroundColor).toBe("#941212");
	expect(tree.children[0].children[0].children[0]).toBe("This is error message");
});

//Test info snackbar with custom color
it("Type info and a custom color generates a orange snackbar with 'This is info message' ", () => {
	const tree = renderer.create(<Snackbar snackColor={"orange"} style={"info"} />).toJSON();
	expect(tree.props.style.backgroundColor).toBe("orange");
	expect(tree.children[0].children[0].children[0]).toBe("This is info message");
});

// Test if hide button is visible when set to true
it("Snackbar with Hide button set to true", () => {
	const tree = renderer.create(<Snackbar hideButton={true} />).toJSON();

	expect(tree.children[1]).toBeDefined();
});

// Test if hide button is not definied when default = false
it("Snackbar with default hide button is false, should not be defined ", () => {
	const tree = renderer.create(<Snackbar />).toJSON();
	// console.log(tree.children[1]);
	expect(tree.children[1]).toBeUndefined();
});

//Test if own message is displayed correctly
it("Message prop is passed into the component, should display what is stated in the prop ", () => {
	const tree = renderer.create(<Snackbar style={"error"} message={"Fill out all fields"} />).toJSON();
	// console.log(tree.children[0].children[0].children[0]);
	expect(tree.children[0].children[0].children[0]).toBe("Fill out all fields");
});
