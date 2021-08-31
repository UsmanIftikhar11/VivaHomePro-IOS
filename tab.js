
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Image, View, Button } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import

// ROUTES
import Reviews from './src/Routes/Reviews/index';
import Leads from './src/Routes/Leads/index';
import Galleries from './src/Routes/Galleries/index';
import Profile from './src/Routes/Profile/index';
import AddReview from './src/Routes/AddReview/index';
import SuccessTracker from './src/Routes/Profile/SucessTracker/index';
import VacationMode from './src/Routes/Profile/VacationMode/index';
import ViewProfile from './src/Routes/Profile/ViewProfile/index';
import Categories from './src/Routes/Profile/Categories/index';
import ChangeCompany from './src/Routes/Profile/ChangeCompany/index';
import GetHelp from './src/Routes/Profile/GetHelp/index';
import ReplayTemps from './src/Routes/Profile/ReplayTemps/index';
import NewTemplates from "./src/Routes/Profile/ReplayTemps/newTemplates/index";
import newTemplatesEditScreen from "./src/Routes/Profile/ReplayTemps/newTemplatesEditScreen/index";

import Detail from './src/Routes/Leads/Active/Detail/index'
import ImageGallery from './src/Routes/Galleries/ImageGallery/index'
import Users from './src/Routes/Profile/Users/index';

//Width Height
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
const tabBarWidth = Width;
// NAVIGATIONS


console.disableYellowBox = true;
const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function HomeStack({ navigation })
{
	navigation.setOptions({ tabBarVisible: false })
	return (
		<Stack.Navigator>
			<Stack.Screen name="AddReview" component={AddReview} />
	
		</Stack.Navigator>
	);
}

const CreatePlaceholder = () => (
	<View style={{ flex: 1, backgroundColor: 'blue' }} />
);


function ProfileTab() 
{
	return (
		<Tab.Navigator
			initialRouteName="Reviews"
			shifting={false}
			// shifting={true}
			labeled={true}
			sceneAnimationEnabled={true}
			activeColor="#64b5f6"
			inactiveColor="#000"
			barStyle={{ backgroundColor: '#ffff' }}
			tabBarOptions={{
				activeTintColor: 'yellow',
				inactiveTintColor: '#000000',
				style: {
					//backgroundColor: "",
					borderBottomLeftRadius: 30,
					borderBottomRightRadius: 30
				},

				indicatorStyle: {
					width: Width * 0.15,
					marginLeft: Width * 0.09,
					backgroundColor: 'yellow',
					position: 'absolute',
					padding: 1
				},
				tabStyle: {
					justifyContent: 'center',
					width: tabBarWidth / 4
				},
				labelStyle: {
					marginTop: 1
				}
			}}
		>
			<Tab.Screen
				name="Reviews"
				component={Reviews}
				options={{
					tabBarIcon: () => <Image style={styles.tinyLogo3} source={require('./assets/star.png')} />
				}}
			/>
			<Tab.Screen
				name="Leads"
				component={Leads}
				options={{
					tabBarIcon: () => <Image style={styles.tinyLogo2} source={require('./assets/lead1.png')} />
				}}
			/>

			<Tab.Screen
				name="title"
				component={CreatePlaceholder}
				options={{
					tabBarVisible: false,
					tabBarLabel: () =>
					{
						return null;
					},
					tabBarIcon: () => <Image style={styles.tinyLogo} source={require('./assets/bttomshadow.jpg')} />
				}}

				listeners={({ navigation }) => ({
					tabPress: (e) =>
					{
						e.preventDefault();
						navigation.navigate('AddRev');
					},
				})}
			/>

			<Tab.Screen
				name="Galleries"
				component={Galleries}
				options={{
					tabBarVisible: false,
					tabBarIcon: () => <Image style={styles.tinyLogo2} source={require('./assets/gallery1.png')} />
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: () => <Image style={styles.tinyLogo2} source={require('./assets/profile1.png')} />
				}}
			/>
		</Tab.Navigator>
	);
}



export default function MainTab()
{
	return (
		<Stack2.Navigator>
			<Stack2.Screen name="ProfileTab" component={ProfileTab} options={{ headerShown: false }} />
			<Stack2.Screen name="ViewProfile" component={ViewProfile} />
			<Stack2.Screen name="Success" component={SuccessTracker} />
			<Stack2.Screen name="ReplayTemps" component={ReplayTemps} options={{ headerShown: false }} />
			<Stack2.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
			<Stack2.Screen name="New Templates" component={NewTemplates} />
			<Stack2.Screen name="VacationMode" component={VacationMode} />
			<Stack2.Screen name="Edit Screen" component={newTemplatesEditScreen} options={{ headerShown: false }} />
			<Stack2.Screen name="AddRev" component={AddReview} options={{
				title: 'Request a Review'
			}} />
					<Stack2.Screen name="Detail" component={Detail}/>
					<Stack2.Screen name="ImageGallery" component={ImageGallery} options={{
				title: 'Galleries'
			}} />



		</Stack2.Navigator>
	)
}




const styles = StyleSheet.create({
	container: {
		paddingTop: 50
	},
	tinyLogo: {
		width: 50,
		height: 50,
		marginBottom: 3
	},
	tinyLogo2: {
		width: 30,
		height: 30
	},
	tinyLogo3: {
		width: 25,
		height: 25
	},
	logo: {
		width: 66,
		height: 58
	}
});





