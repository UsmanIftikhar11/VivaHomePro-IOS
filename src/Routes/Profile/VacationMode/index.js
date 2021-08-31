import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import styles from './styles';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<ScrollView>
                 <Text>Hello Mode</Text>
			</ScrollView>
		);
	}
}

export default index;
