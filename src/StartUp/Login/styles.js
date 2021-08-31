import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: '#b466c9',
    },
    logInTextViewContainer: {
        height: Height * 0.048
    },
    logInTextStyle: {
        color: '#fff',
        fontSize: 16
    },
    logInButtonContainer: {
        marginTop: Height * 0.05,
        height: Height * 0.1,
        width: Width * 1,
    },
    loginButtonTouchable: {
        height: Height * 0.1,
        marginHorizontal: Width * 0.02,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#7c4dff',
        borderWidth: 1,
    },

    logInButtonStyle: {
        fontSize: 20,
        color: '#75328f'
    },
    signUpButtonContainer: {
        marginBottom: Height * 0.05
    },
    signUpButtonTouchable: {
        justifyContent: 'center',
        alignItems: "center",
    },
    signUpButtonStyle: {
        marginTop: Height * 0.01,
        color: '#fff'
    },
})

export default styles;