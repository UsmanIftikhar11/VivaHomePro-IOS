import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, Linking,TouchableOpacity } from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import styles from './styles';
import { createStackNavigator } from '@react-navigation/stack';


class index extends Component {
	constructor(props) {
		super(props);
		this.state = {

        };
	}
	render() {
		return (
			<ScrollView>
				<View style={{flex:1,justifyContent:'center', alignItems:'center', marginTop: 100}}>
                    <Text>It is a SignUp Page</Text>
                    <TouchableOpacity style={{backgroundColor:"green"}} onPress={()=> this.props.navigation.navigate("Login")}>
                        <Text>Login </Text>
                    </TouchableOpacity>
                </View>
			</ScrollView>
		);
	}
}

export default index;
