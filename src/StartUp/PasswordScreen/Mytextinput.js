/*Custom TextInput*/
import React from "react";
import { View, TextInput, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Mytextinput = (props) => {
  return (
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#000a12"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
      value={props.value}
      keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
  );
};
export default Mytextinput;
