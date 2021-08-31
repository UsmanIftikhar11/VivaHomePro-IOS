import styles from './styles';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity, View, Text, Image, Alert } from 'react-native';
import Mytextinput from "./Mytextinput";
import * as Linking from 'expo-linking';

class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			data: '',
			password: '',
			hidePassword: true,
			email: this.props.route.params.email
		};
	}
	forgotPassword()
	{
		Linking.openURL('https://www.vivahomepros.com/user-forget-password.php');
	
}
	handlePostRecord = () =>
	{
		var formData = new FormData();
		formData.append('email', this.state.email)
		formData.append('pass', this.state.password)

		fetch('https://vivahomepros.com/mobile-app/login.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data'
			},

			body: formData


		})
			.then((Response) => Response.json())
			.then((responseData) =>
			{
				this.setState({ data: responseData })

				if (responseData.message == 'success')
				{
					//console.log(`this.state.data=========`, this.state.data.login[0].pid)

					const setId = this.state.data.login[0].pid;
					const setName = this.state.data.login[0].cname;
					const setbbuild = this.state.data.login[0].bbuild;
					const category = this.state.data.login[0].category;

					AsyncStorage.setItem('setId', setId);
					AsyncStorage.setItem('setName', setName);
					AsyncStorage.setItem('setbbuild', setbbuild);
					AsyncStorage.setItem('category', category);

		
					AsyncStorage.getItem('setId').then(id =>
					{
						console.log('id', id);

					})
					AsyncStorage.getItem('setName').then(name =>
					{
						console.log('name', name)

					})
					AsyncStorage.getItem('setbbuild').then(bbuild =>
					{
						console.log('bbuild', bbuild)

					})
					AsyncStorage.getItem('category').then(category =>
					{
						console.log('category', category)

					})
					this.props.navigation.navigate("Main", { data: this.state.data })


				}
				else
				{
					Alert.alert('Please enter valid email or password')
				}

			})
			.catch(error => console.log(error))
	}

	managePasswordVisibility = () =>
	{
		this.setState({ hidePassword: !this.state.hidePassword });
	};

	render()
	{
		return (
			<View style={styles.mainContainer}>
				<LinearGradient
					colors={['rgba(119,52,145,255)', 'transparent']}
					style={styles.mainContainer}
				>
					<View style={styles.rightArrowTouchableContainer}>
						{/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}> */}
						<TouchableOpacity onPress={() => this.handlePostRecord()}>
							<Image
								style={styles.rightArrowTouchableImage}
								source={require('../../../assets/forwardarrowblue.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.passwordAddressTextContainer}>
						<Text style={styles.passwordAddressTextStyle}>Your password</Text>
					</View>
					<View style={styles.textInputContainer}>
						<Mytextinput
							style={styles.textInputStyle}
							onChangeText={(password) => this.setState({ password })}
							secureTextEntry={this.state.hidePassword}
						/>
					</View>
					<View style={styles.passwordMainContainer}>
						<View style={styles.showPasswordContainer}>
							<TouchableOpacity style={styles.showHidepassword} onPress={this.managePasswordVisibility}>
								<View>
									<Image
										source={
											this.state.hidePassword
												? require("../../../assets/checkbox_border.png")
												: require("../../../assets/checkbox.png")
										}
									/>
								</View>
								<View>

									<Text style={styles.showPasswordTextStyle}>Show password</Text>
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.forgotPasswordContainer}>
							<TouchableOpacity onPress={()=>this.forgotPassword()}>
								<Text style={styles.forgotPasswordTextStyle}>Forgot password</Text>
							</TouchableOpacity>
						</View>
					</View>
				</LinearGradient>
			</View>

		);
	}
}

export default index;
