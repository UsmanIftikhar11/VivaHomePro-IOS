import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Width * 0.99,
    height: Height,
    paddingTop: Height * 0.03,
    paddingHorizontal: Width * 0.03,
    alignItems: "flex-start",
    borderWidth: 2,
    borderColor: "red",
    //justifyContent: "center",
  },
  imagestyle: {
    width: 60, height: 60, borderRadius: 30 
  },

  listItem: {
    margin: 3,
    padding: 10,
    backgroundColor: "white",
    width: Width,
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",

  },

  TabStyle: {
    fontSize: RFValue(12)
  }
});

export default styles;
