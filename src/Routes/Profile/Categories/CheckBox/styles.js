import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainFlatlistContainer: {
        flex: 0.5,
    },
    innerFlatListContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 5,
        marginHorizontal: 5,
        marginVertical: 5
    },
    checkBoxContainer: {
        height: 50,
        justifyContent: 'center'
    },
    mainTouchableContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxStyle: {
        width: 20,
        height: 20,
        marginLeft: 20
    },

    textAndButtonContainer: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-around'
    },
    textContainer: {
        width: windowWidth * 0.4,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: RFValue(18),
        fontWeight: 'bold',
        width: windowWidth * 1,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    removeButtonStyle: {
        fontSize: RFValue(18),
        alignSelf: 'center',
        borderColor: '#000',
        borderWidth: 0.5,
        padding: 9,
        borderRadius: 10
    },
    categoryButtonContainer: {
        flex: 1,
        width: windowWidth * 0.35,



    },
    addCategoryStyle: {
        backgroundColor: '#722f8c',
        borderColor: '#000',
        borderWidth: 0.5,
        padding: 9,
        borderRadius: 10,
        marginLeft: 5,
        color: '#fff',
    },
    addMoreCategoriesContainer: {
        width: windowWidth * 1,
    },
    addMoreCategoriesText: {
        marginLeft: 5,
        fontSize: RFValue(18)
    },
    addMoreCategoriesInnerText: {
        marginTop: 20,
        marginHorizontal: 30,
        textAlign: 'center',
        fontSize: RFValue(18)
    },
    addMoreCategoriesRequestTask: {
        textAlign: 'center',
        color: '#722f8c'
    },
    mainTouchableTextContainer: {
        marginLeft: 30
    }
})

export default styles;