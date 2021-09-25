import * as React from 'react';
import { Text, View, ScrollView, Dimensions, Image, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Active from "./Active/index"
import Cancel from "./Cancel/index";
import Completed from "./completed/index";

import styles from "./styles";
// import Login from '../Screens/Login';
const Tab3 = createMaterialTopTabNavigator();

export default class index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.headerView}>
            <View style={styles.headerInnserView}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity>
                  {/* <Image source={require('../../../assets/leftarrow.png')} style={styles.headericon} /> */}
                </TouchableOpacity>
                <Text style={styles.headertext} >Leads</Text>
              </View>
            </View>
          </View>
          <Tab3.Navigator
            style={{ backgroundColor: "#f5f4f9" }}
            Tab2BarOptions={{
              style: { marginTop: 20, borderRadius: 10, width: Dimensions.get('screen').width - 40, alignSelf: 'center', height: 50 }
            }} >

            <Tab3.Screen name="Active" component={Active} options={{
              tabBarLabel: () => <Text style={styles.TabStyle}>ALL</Text>
            }} />
            <Tab3.Screen name="Cancel" component={Cancel} options={{
              tabBarLabel: () => <Text style={styles.TabStyle}>DRAFTS</Text>
            }} />
            <Tab3.Screen name="Completed" component={Completed} options={{
              tabBarLabel: () => <Text style={styles.TabStyle}>SENT</Text>
            }} />

          </Tab3.Navigator>
        </SafeAreaView>
      </>
    );
  }
}
