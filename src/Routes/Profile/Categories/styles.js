import { StyleSheet,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    mainContainer: {
        flex: 1,
     
    },
    headerContainer: {
        flex: 0.3,
       
    },
    CheckBoxContainer: {
        flex:0.7
    }
	
});

export default styles;