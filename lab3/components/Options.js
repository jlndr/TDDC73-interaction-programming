import React, {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import {Text, View, StyleSheet, Button} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

const Options = ({language, setLanguage}) => {
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

  const filter = ["None", "Stars", "Forks", "Commits"];
  const [filt, setFilt] = useState("None");

  // const [l, setL] = useState("C++")
  return (
    <View style={{width: "100%", padding: 10, borderRadius: 5}}>
      <Text style={{color: "white", marginBottom: 5}}> Pick language</Text>

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
          onSelect={(index, option) => setFilt(option.toString())}
          options={filter}
          defaultValue={filt}
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
