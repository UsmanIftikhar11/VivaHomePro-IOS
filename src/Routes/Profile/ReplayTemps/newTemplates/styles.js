import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    input: {
        margin: 15,
        height: 40,
        backgroundColor: '#fafafa',
        height: 60
    },
    submitButton: {
        height: 60,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
       
    },
    submitButtonText: {
        color: '#000',
        alignSelf: 'center', 
       
        
    },
    submitButtonContainer: {
        marginTop: 250,
        alignSelf: 'flex-end',
        // backgroundColor: '#fafafa',
        borderRadius: 10,
        borderColor: '#000',
        borderWidth:0.1
         
         

        
    }

})

export default styles;