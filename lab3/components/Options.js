import React, {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import {Text, View, StyleSheet, Button} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

const Options = ({language, setLanguage, filter, setFilter, limit, setLimit}) => {
  const langs = [
    "All",
    "C",
    "C++",
    "C#",
    "Dart",
    "Go",
    "JavaScript",
    "Java",
    "Kotlin",
    "PHP",
    "Python",
    "Ruby",
    "Rust",
    "Starlark",
    "Swift",
    "TypeScript",
  ];

  const filters = ["Stars", "Forks"];
  const limits = ["10", "20", "30", "40", "50"];

  return (
    <View style={{width: "100%", padding: 10, borderRadius: 5}}>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <Text style={{color: "white", marginBottom: 5, width: "50%"}}> Pick language</Text>
        <Text style={{color: "white", marginBottom: 5, width: "10%"}}> #</Text>
        <Text style={{color: "white", marginBottom: 5, width: "30%"}}> Sort by</Text>
      </View>

      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <ModalDropdown
          onSelect={(index, option) => setLanguage(option.toString())}
          options={langs}
          defaultValue={language}
          style={{width: "50%"}}
          textStyle={style.text}
          dropdownStyle={style.drop}
          dropdownTextStyle={style.droptext}
          dropdownTextHighlightStyle={style.hlight}
          renderRightComponent={DropIcon}
        />

        <ModalDropdown
          onSelect={(index, option) => setLimit(option.toString())}
          options={limits}
          defaultValue={limit}
          style={{width: "10%"}}
          textStyle={style.text}
          dropdownStyle={style.dropSmaller}
          dropdownTextStyle={style.droptext}
          dropdownTextHighlightStyle={style.hlight}
          renderRightComponent={DropIcon}
        />

        <ModalDropdown
          onSelect={(index, option) => setFilter(option.toString())}
          options={filters}
          defaultValue={filter}
          style={{width: "30%"}}
          textStyle={style.text}
          dropdownStyle={style.dropSmall}
          dropdownTextStyle={style.droptext}
          dropdownTextHighlightStyle={style.hlight}
          renderRightComponent={DropIcon}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: "white",
  },
  drop: {
    width: "47%",
  },
  dropSmall: {
    width: "29%",
  },
  dropSmaller: {
    width: "9.8%",
  },
  droptext: {
    backgroundColor: "#003d3d",
    color: "white",
  },
  hlight: {
    backgroundColor: "#006666",
    color: "white",
  },
});

export default Options;

const DropIcon = () => {
  return (
    <View>
      <Text style={{color: "white"}}>v</Text>
    </View>
  );
};
