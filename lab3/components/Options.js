import React, {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import {Text, View, StyleSheet} from "react-native";
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

   // const [l, setL] = useState("C++")
   return (
      <View style={{width: "60%", backgroundColor: "#001313", padding: 10, borderRadius: 5}}>
         <Text style={{color: "white", marginBottom: 5}}> Pick language</Text>

         <View style={{justifyContent: "center"}}>
            <ModalDropdown
               onSelect={(index, option) => setLanguage(option.toString())}
               options={langs}
               defaultValue={language}
               textStyle={style.text}
               dropdownStyle={style.drop}
               dropdownTextStyle={style.droptext}
               dropdownTextHighlightStyle={style.hlight}
               renderRightComponent={DropIcon}
            />
         </View>
         {/* <ModalDropdown options={['option 1', 'option 2']}/> */}
      </View>
   );
};

const style = StyleSheet.create({
   text: {
      color: "white",
   },
   drop: {
      width: "30%",
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
