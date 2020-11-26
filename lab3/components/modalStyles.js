//Style for react-native-modal-dropdown

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 12,
  },
  modal: {
    flexGrow: 1,
  },
  dropdown: {
    position: "absolute",
    maxHeight: (33 + StyleSheet.hairlineWidth) * 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    borderRadius: 2,
    backgroundColor: "white",
    justifyContent: "center",
  },
  loading: {
    alignSelf: "center",
  },
  list: {
    // flexGrow: 1,
  },
  rowText: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    fontSize: 11,
    color: "gray",
    backgroundColor: "white",
    textAlignVertical: "center",
  },
  highlightedRowText: {
    color: "black",
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "lightgray",
  },
});
