import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";

import MainTab from "../../../tab";

import styles from "./styles";

class Main extends Component
{
  componentDidMount()
  {
    console.log(`this.props.route.params.data`, this.props.route.params.data)
  }

  render()
  {
    const { data } = this.props.route.params;
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden={false} />
        {/* <View style={styles.headerContainer}>
          <Text>VIVA HOME PROS</Text>
        </View> */}
        <MainTab data={data} />
      </View>
    );
  }
}

export default Main;
