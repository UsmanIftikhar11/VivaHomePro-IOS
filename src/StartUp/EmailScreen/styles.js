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
    emailAddressTextContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    emailAddressTextStyle: {
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
        color: '#fafafa',
        alignItems: 'center',
        textAlign:'center'
        
    },
    privacyPolicymainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    termsOfUseContainer: {
        height: Height * 0.1,
        width: Width * 0.3,
    },
    privacypolicyContainer: {
        height: Height * 0.1,
        width: Width * 0.3,
    },
    termsOfUsetextStyle: {
        color: '#fff',
        fontSize: 14
    },
    privacyPolicytextStyle: {
        color: '#fff',
        fontSize: 14
    },
    versionContolContainer: {
        alignItems: "center"
    },
    versionContolTextStyle: {
        color: '#fff'
    }
})

export default styles;