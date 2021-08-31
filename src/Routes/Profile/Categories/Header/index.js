import styles from './styles';
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {};
	}
	render()
	{
		const { navigation } = this.props;
		return (

			<View>
				<LinearGradient
					colors={['#722f8c', '#722f8c', '#b062c5']}
					style={styles.background}
				>
					<View style={styles.headerView}>
						<View style={styles.headerInnserView}>
							<View style={styles.leftArrowContainerView}>
								<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
									<Image
										source={require('../../../../../assets/letter-x.png')}
										style={styles.leftArrowStyle}
									/>
								</TouchableOpacity>

							</View>
							<Text style={styles.categoriesAndTaskStyles}>Categories and Tasks</Text>
						</View>
					</View>
					<View style={styles.headerTextContainer}>
						<Text style={styles.headerTextStyle}>Select the tasks you are able to perform for each category. You will also recive for these tasks.</Text>
					</View>
				</LinearGradient>
			</View>


		);
	}
}

export default index;


