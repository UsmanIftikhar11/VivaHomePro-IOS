import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#b466c9',
    },
    rightArrowTouchableContainer: {
        width: 60,
        height: 60,
        marginTop: Height * 0.2,
        backgroundColor: '#fff',
        borderRadius: 60,
        alignSelf: 'flex-end'
    },
    rightArrowTouchableImage: {
        width: Width * 0.08,
        height: Height * 0.04,
        marginTop: Width * 0.05,
        marginLeft: Width * 0.04
    },
    passwordAddressTextContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    passwordAddressTextStyle: {
        color: '#fff',
        fontSize: 18
    },
    textInputContainer: {
        justifyContent: 'center',
    },
    textInputStyle: {
        height: Height * 0.08,
        borderBottomWidth: 1,
        borderBottomColor: '#fafafa',
        textAlign: 'center',
        color:'#fafafa'
    },
    passwordMainContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    showPasswordContainer: {
        height: Height * 0.1,
        width: Width * 0.5,
    },
    forgotPasswordContainer: {
        height: Height * 0.1,
        width: Width * 0.3,
    },
    showPasswordTextStyle: {
        marginLeft:10,
        color: '#fff',
        fontSize: 14
    },
    forgotPasswordTextStyle: {
        color: '#fff',
        fontSize: 14
    },
    showHidepassword: {
        flexDirection: 'row',
        
    }
})

export default styles;