import styles from './styles';
import React, { Component } from 'react';
import * as Linking from 'expo-linking';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TouchableOpacity } from 'react-native';



class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {	

		};
	}
	clickSignup()
	{
		Linking.openURL('https://www.vivahomepros.com/user-register.php');
	
}
	
	
	render()
	{
		return (
			<View style={styles.mainContainer}>
				<LinearGradient
					colors={['rgba(119,52,145,255)', 'transparent']}
					style={styles.mainContainer}
				>
					<View style={styles.logInTextViewContainer}>
						<Text style={styles.logInTextStyle}>Connect with homeowners looking</Text>
					</View>
					<View style={styles.logInButtonContainer}>
						<TouchableOpacity style={styles.loginButtonTouchable} onPress={() => this.props.navigation.navigate("EmailScreen")}>
							<Text style={styles.logInButtonStyle}>LOG IN</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.signUpButtonContainer}>
						<TouchableOpacity style={styles.signUpButtonTouchable} onPress={() => this.clickSignup()}>
							<Text style={styles.signUpButtonStyle}>Not Yet a Viva Home Pro? Sign Up</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>

		);
	}
}

export default index;
