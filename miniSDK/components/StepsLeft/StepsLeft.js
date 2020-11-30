import React, {useState} from "react";

import {Text, View, StyleSheet} from "react-native";

import Item from "./Item";

const StepsLeft = () => {
   const items = [
      {title: "Order placed", status: "done"},
      {title: "In review", status: "active"},
      {title: "Approval", status: "incomplete"},
   ];

   return (
      <View style={{backgroundColor: "black", width: "100%"}}>
         <View style={style.line}></View>
         <View style={{flexDirection: "row"}}>
            {items.map((item, i) => {
               return (
                  <Item
                     key={i}
                     title={item.title}
                     iconSize={30}
                     currentStatus={item.status}
                     number={i}
                     total={items.length}
                  />
               );
            })}
         </View>
      </View>
   );
};

export default StepsLeft;

const style = StyleSheet.create({
   line: {
      // zIndex: 1,
      // position: "absolute",
      top: 35,
      width: "100%",
      borderBottomColor: "white",
      borderBottomWidth: 1,
      // height: 1,
   },
   text: {
      color: "white",
   },
});
