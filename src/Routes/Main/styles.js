import { StyleSheet, Dimensions, StatusBar } from "react-native";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Width,
    height: Height,
  },
  headerContainer: {
    width: Width * 0.99,
    height: Height * 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
