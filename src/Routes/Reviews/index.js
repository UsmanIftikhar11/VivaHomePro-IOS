
import styles from "./styles";
import * as React from 'react';
import { StyleSheet, View, ToastAndroid,SafeAreaView } from 'react-native';
import { Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllReviews from "./AllReviews/index";
import AsyncStorage from '@react-native-community/async-storage';
import DraftsReviews from "./DraftsReviews/index";
import PublishedReviews from "./PublishedReviews/index";
import SentReviews from "./SentReviews/index";

const Tab2 = createMaterialTopTabNavigator();

export default class index extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      // data: props.route.params.data,
    }

  }
  componentDidMount()
  {
    AsyncStorage.getItem('key').then(count =>
    {
      console.log('count==', count)

    })
  }


  render()
  {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.headerView}>
            <View style={styles.headerInnserView}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity>
                  {/* <Image source={require('../../../assets/leftarrow.png')} style={styles.headericon} /> */}
                </TouchableOpacity>
                <Text style={styles.headertext} >Request a Review</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("AddRev")}>
                <Image source={require('../../../assets/edit.png')} style={styles.headericon} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </View>

          <Tab2.Navigator
            style={{ backgroundColor: "#f5f4f9" }}
            Tab2BarOptions={{
              style: { marginTop: 20, borderRadius: 10, width: Dimensions.get('screen').width - 40, alignSelf: 'center', height: 50 }
            }} >

            <Tab2.Screen name="All" component={AllReviews} options={{
              tabBarLabel: () => <Text style={styles.TabStyle}>ALL</Text>
            }} />
            <Tab2.Screen name="Drafts" component={DraftsReviews} options={{
              tabBarLabel: () => <Text style={styles.TabStyle}>DRAFTS</Text>
            }} />
            <Tab2.Screen name="Sent" component={SentReviews} options={{
              tabBarLabel: () => <Text style={styles.TabStyle}>SENT</Text>
            }} />
            <Tab2.Screen name="Published" component={PublishedReviews} options={{
              tabBarLabel: () => <Text style={styles.TabStyle}>PUBLISHED</Text>
            }} />

          </Tab2.Navigator>
        </SafeAreaView>
      </>
    );
  }
}


