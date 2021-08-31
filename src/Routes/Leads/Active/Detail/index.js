import React, { Component } from 'react'
import { Text, View,TouchableOpacity ,Dimensions} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles'
import ServiceRequest from '../Detail/ServiceRequest/index';
import Chat from '../Detail/Chat/index';
const Tab3 = createMaterialTopTabNavigator();
export default class index extends Component {
    render() {
        return (
            <Tab3.Navigator
            style={{backgroundColor:"#f5f4f9"}} 
            Tab2BarOptions={{
               style: { marginTop: 0, borderRadius: 10, width: Dimensions.get('screen').width-40, alignSelf:'center', height: 50,}
           }}
           
           >
       
             <Tab3.Screen name="Service" component={ServiceRequest} options={{
                  tabBarLabel:()=> <Text style={styles.TabStyle}>Service</Text>
             }} />
       
             <Tab3.Screen name="Chat" component={Chat} options={{
                  tabBarLabel:()=> <Text style={styles.TabStyle}>Chat</Text>
             }}  />
       
             
           </Tab3.Navigator>
        )
    }
}
