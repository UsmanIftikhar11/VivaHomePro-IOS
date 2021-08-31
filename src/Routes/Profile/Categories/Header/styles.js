import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({

	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: Height * 0.25,
	},
	button: {
		padding: 15,
		alignItems: 'center',
		borderRadius: 5
	},
	text: {
		backgroundColor: 'transparent',
		fontSize: 15,
		color: '#fff'
	},

	headerView: {
		height: Height * 0.1,
		backgroundColor: '#722f8c',
		justifyContent: 'center'
	},
	headerInnserView: {
		flexDirection: 'row',
		//  justifyContent: 'space-between',
		paddingHorizontal: Width * 0.05,
	},
	leftArrowContainerView: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	leftArrowStyle: {
		width: Width * 0.03,
		height: Height * 0.04,
	},
	replayTemplatesStyle: {
		fontSize: 18,
		marginLeft: Width * 0.05
	},
	plusIconStyle: {
		width: Width * 0.04,
		height: Height * 0.03,
		marginTop: Height * 0.009
	},
	categoriesAndTaskStyles: {
		paddingHorizontal: Width * 0.16,
		fontSize: RFValue(22),
		color: '#fff'
	},
	headerTextContainer: {
		alignSelf: 'center',
		marginTop: 40,
		width: Width * 0.7
	},
	headerTextStyle: {
		color: '#fff',
		textAlign:"center"
	},
});

export default styles;
