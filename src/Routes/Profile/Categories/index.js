import styles from "./styles";
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './Header/index';
import CheckBox from './CheckBox/index'
class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {};
		AsyncStorage.getItem('category').then(category =>
					{
						console.log('category', category);

					})
	}
	render()
	{
		const { navigation } = this.props;
		return (
			<View style={styles.container}>

				<View style={styles.mainContainer}>
					<View style={styles.headerContainer}>
						<Header navigation={navigation} />
					</View>
					<View style={styles.CheckBoxContainer}>
						<CheckBox />
					</View>
				</View>

			</View>
		);
	}
}

export default index;