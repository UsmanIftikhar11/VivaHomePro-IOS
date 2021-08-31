import { StyleSheet, Dimensions, StatusBar } from 'react-native';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	
		// color: 'white'
	},
	headerContainer: {
		width: Width * 0.99,
		height: Height * 0.1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	InputView: {
		backgroundColor: 'white',
		flexDirection: 'row',
		borderTopColor: 0,
		borderBottomColor: 'gray',
		width: Width,
		height: Height * 0.07,
		borderWidth: 0.5
	},
    TitleText:{
        paddingLeft: 15,
        paddingTop: 15
    },
    buttonStyle:{borderWidth: 1, borderColor: 'gray', width: Width * 0.2, height: Height * 0.04, justifyContent:'center', borderRadius: 10},

    bottomView: {
        justifyContent:'space-between', flexDirection:'row', padding: 20, backgroundColor: 'white', marginTop: Height * 0.4 
      },

});

export default styles;
